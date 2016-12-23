import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

import '../assets/css/ListItemForm.css';

class CategoryCountPie extends Component {
  render() {
    const { data } = this.props;
    return (
      <PieChart
        width={800}
        height={400}>
        <Pie
          data={data}
          nameKey="category"
          innerRadius={75}
          minAngle={3}
          paddingAngle={2}
          valueKey="count">
          {
            data.map((datum, index) => <Cell fill={categoryToColor(datum.category)} key={index} />)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}

CategoryCountPie.propTypes = {
  data: PropTypes.array
};

export default CategoryCountPie;
