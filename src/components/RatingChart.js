import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine } from 'victory';
import datalib from 'datalib';

import '../assets/css/ListItemForm.css';


class RatingChart extends Component {
  computeLinearRegression(data) {
    // TODO CLEANUP
    if(data.length > 1) {
      const time = data.map(datum => {
        return datum.dateReleased.getTime();
      });
      const rating = data.map(datum => {
        return datum.rating;
      });
      const lin = datalib.linearRegression(time, rating);
      return time.map(instance => {
        return { x: new Date(instance), y: lin.slope * instance + lin.intercept }
      });
    }
  }
  render() {
    const linearRegression = this.computeLinearRegression(this.props.data);
    return (
      <VictoryChart>
        <VictoryAxis
          tickCount={12}
          tickFormat={(tick) => new Date(tick).toISOString().slice(0, 10)}
          style={{
            ticks: {stroke: "black", strokeWidth: 3},
            tickLabels: {fontSize: 3},
            axisLabel: {fontSize: 5}
          }}
          label="Review Date"
          standalone={false}
        />
        <VictoryAxis dependentAxis
          tickCount={5}
          standalone={false}
          domain={[0, 10]}
          label="Rating"
          style={{
            tickLabels: {fontSize: 7},
            axisLabel: {fontSize: 5},
            grid: {stroke: "gray"}
          }}
        />
        <VictoryLine
          data={linearRegression}
          label={`${this.props.averageRating.toFixed(4)} mean ${linearRegression.length} reviews`}
          standalone={false}
          style={{
            data: {strokeWidth: 3},
            labels: {fontSize: 3, fill: "black"},
          }}
          events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  target: "data",
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, {stroke: "tomato", cursor: "pointer"})
                    }
                  }
                }, {
                  target: "labels",
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, {fill: "tomato"})
                    }
                  }
                }];
              },
              onMouseOut: () => {
                return [{
                  target: "data",
                  mutation: (props) => {
                    return null;
                  }
                }, {
                  target: "labels",
                  mutation: (props) => {
                    return null;
                  }
                }];
              }
            }
          }]}
        />
        <VictoryScatter
          data={this.props.data}
          x="dateReleased"
          y="rating"
          standalone={false}
          size={1}
          labels={(datum) => `Product: ${datum.product}\nRating: ${datum.rating}\nManufacturer: ${datum.manufacturer}\nCategory: ${datum.category}\nDate Reviewed: ${new Date(datum.dateReleased).toISOString().slice(0,10)}`}
          labelComponent={<VictoryTooltip
            dy={-7}
            style={{
              fontSize: 3
            }}
            flyoutStyle={{
              stroke: "lavender",
              fill: "lavender"
            }}
          />}
          events={[{
            target: "data",
            eventHandlers: {
              onClick: () => {
                return {
                  mutation: (props) => {
                    window.open(`https://www.youtube.com/watch?v=${props.datum.videoCode}`);
                  }
                };
              },
              onMouseOver: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        active: true
                      };
                    }
                  }, {
                    target: "data",
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {fill: "tomato", cursor: "pointer"})
                      }
                    }
                  }
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        active: false
                      };
                    },
                  }, {
                    target: "data",
                    mutation: (props) => {
                      return null;
                    }
                  }
                ];
              }
            }
          }]}
        />
      </VictoryChart>
    );
  }
}

RatingChart.propTypes = {
  data: PropTypes.array,
  averageRating: PropTypes.number
};

export default RatingChart;
