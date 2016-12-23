import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

import '../assets/css/ListItemForm.css';

class CategoryCountBar extends Component {
  render() {
    const { data } = this.props;
    return (
      <BarChart
        width={800}
        height={400}
        data={data}>
        <Tooltip />
        <XAxis
          dataKey="category"
        />
        <Bar
          barSize={60}
          name="Reviews"
          dataKey="count"
          minPointSize={5}>
          {
            data.map(datum => <Cell fill={categoryToColor(datum.category)} />)
          }
        </Bar>
      </BarChart>
    );
  }
}

CategoryCountBar.propTypes = {
  data: PropTypes.array
};

export default CategoryCountBar;
