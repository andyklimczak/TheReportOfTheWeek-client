import React, { Component, PropTypes } from 'react';

import '../assets/css/RatingChartTooltip.css';


class RatingChartTooltip extends Component {
  render() {
    const { active } = this.props;
    if(active) {
      const { payload } = this.props;
      const info = payload[1].payload;
      return (
        <div className="rating-chart-tooltip">
          <div className="label">
            Product: { info.product }
          </div>
          <div>
            Rating: { info.rating }
          </div>
          <div>
            Category: { info.category }
          </div>
          <div>
            Manufacturer: { info.manufacturer }
          </div>
          <div>
            Review Date: { info.dateReleased.toISOString().slice(0, 10) }
          </div>
        </div>
      );
    }
  }
}

RatingChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default RatingChartTooltip;
