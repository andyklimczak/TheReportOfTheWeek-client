import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, ResponsiveContainer } from 'recharts';

import '../assets/css/ListItemForm.css';

class CategoryCountBar extends Component {
  render() {
    return (
      <BarChart
        width={800}
        height={400}
        data={this.props.data}>
        <Tooltip />
        <XAxis
          dataKey="category"
        />
        <Bar
          barSize={60}
          name="Reviews"
          dataKey="count"
          minPointSize={5}
          fill="salmon"
        />
      </BarChart>
    );
  }
}

CategoryCountBar.propTypes = {
  data: PropTypes.array
};

export default CategoryCountBar;
