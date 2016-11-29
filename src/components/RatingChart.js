import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine } from 'victory';
import datalib from 'datalib';

import '../assets/css/ListItemForm.css';


class RatingChart extends Component {
  computeLinearRegression(data) {
    // TODO CLEANUP
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
  render() {
    const linearRegression = this.computeLinearRegression(this.props.data);
    console.log(linearRegression);
    return (
      <VictoryChart>
        <VictoryAxis
          tickCount={12}
          tickFormat={(tick) => new Date(tick).toISOString().slice(0, 10)}
          style={{
            ticks: {stroke: "black", strokeWidth: 3},
            tickLabels: {fontSize: 3}
          }}
          label="Video Upload Date"
          standalone={false}
        />
        <VictoryAxis dependentAxis
          tickCount={4}
          standalone={false}
          domain={[0, 10]}
          label="Rating"
        />
        <VictoryLine
          data={linearRegression}
          standalone={false}
        />
        <VictoryScatter
          data={this.props.data}
          x="dateReleased"
          y="rating"
          standalone={false}
          size={1}
          labels={(datum) => `Product: ${datum.product}\nRating: ${datum.rating}\nManufacturer: ${datum.manufacturer}\nCategory: ${datum.category}\nDate Reviewed: ${new Date(datum.dateReleased).toISOString().slice(0,10)}`}
          labelComponent={<VictoryTooltip
            cornerRadius={0}
            style={{
              fontSize: 3
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
                      return {style: {fill: "tomato", cursor: "pointer"}};
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
  data: PropTypes.array
};

export default RatingChart;
