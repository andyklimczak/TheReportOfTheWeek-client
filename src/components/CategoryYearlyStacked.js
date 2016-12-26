import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

import '../assets/css/ListItemForm.css';

class CategoryYearlyStacked extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <BarChart
        width={800}
        height={400}
        data={data}>
      </BarChart>
    );
  }
}

CategoryYearlyStacked.propTypes = {
  data: PropTypes.array
};

export default CategoryYearlyStacked;
