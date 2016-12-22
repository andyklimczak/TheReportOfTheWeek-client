import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, ResponsiveContainer } from 'recharts';

import '../assets/css/ListItemForm.css';

class CategoryCountPie extends Component {
  render() {
    return (
      <PieChart
        width={800}
        height={400}>
        <Pie
          fill="salmon"
          data={this.props.data}
          nameKey="category"
          innerRadius={75}
          minAngle={3}
          paddingAngle={2}
          valueKey="count" />
        <Tooltip />
      </PieChart>
    );
  }
}

CategoryCountPie.propTypes = {
  data: PropTypes.array
};

export default CategoryCountPie;
