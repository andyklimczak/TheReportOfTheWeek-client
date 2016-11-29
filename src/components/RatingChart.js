import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine } from 'victory';

import '../assets/css/ListItemForm.css';


class RatingChart extends Component {
  render() {
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
        />
        <VictoryAxis dependentAxis
          tickCount={4}
          domain={[0, 10]}
          label="Rating"
        />
        <VictoryLine
          data={this.props.data}
          x="dateReleased"
          y="rating"
          standalone={false}
          interpolation="monotoneX"
          scale={{x: "time", y: "linear"}}
        />
        <VictoryScatter
          data={this.props.data}
          x="dateReleased"
          y="rating"
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
