import React, { PropTypes } from 'react';

import '../assets/css/RatingChartTooltip.css';

const RatingChartTooltip = ({ active, payload }) => {
  if(active) {
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
};

RatingChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default RatingChartTooltip;
