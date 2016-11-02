import React, { Component, PropTypes } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis } from 'victory';

import '../assets/css/ListItemForm.css';


class RatingChart extends Component {
  render() {
    return (
      <VictoryChart>
        <VictoryScatter
          data={this.props.data}
          x="dateReleased"
          y="rating"
        />
      </VictoryChart>
    );
  }
}

RatingChart.propTypes = {
  data: PropTypes.array
};

export default RatingChart;
