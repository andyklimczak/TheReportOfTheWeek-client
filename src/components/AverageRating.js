import React, { Component, PropTypes } from 'react';

import '../assets/css/ListItemForm.css';

class AverageRating extends Component {
  render() {
    return (
      <div>
        {this.props.averageRating.toFixed(4)} average {this.props.count} reviews
      </div>
    );
  }
}

AverageRating.propTypes = {
  averageRating: PropTypes.number,
  count: PropTypes.number,
};

export default AverageRating;
