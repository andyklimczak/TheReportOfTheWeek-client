import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryToolTip } from 'victory';

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
            tickLabels: {fontSize: 2}
          }}
          label="Video Upload Date"
        />
        <VictoryAxis dependentAxis
          tickCount={4}
          domain={[0, 10]}
          label="Rating"
        />
        <VictoryScatter
          data={this.props.data}
          x="dateReleased"
          y="rating"
          size={1}
          events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: (props) => {
                      const fill = props.style.fill;
                      return fill === "gold" ? null : {style: {fill: "gold"}};
                    }
                  }
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    mutation: (props) => {
                      const fill = props.style.fill;
                      return fill === "gold" ? null : {style: {fill: "gold"}};
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
