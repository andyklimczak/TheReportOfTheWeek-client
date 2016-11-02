import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis } from 'victory';

import '../assets/css/ListItemForm.css';


class RatingChart extends Component {
  render() {
    return (
      <VictoryChart>
        <VictoryAxis
          tickCount={10}
          style={{
            ticks: {stroke: "black", strokeWidth: 3}
          }}
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
        />
      </VictoryChart>
    );
  }
}

RatingChart.propTypes = {
  data: PropTypes.array
};

export default RatingChart;
