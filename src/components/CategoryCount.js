import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';

import '../assets/css/ListItemForm.css';

class CategoryCount extends Component {
  render() {
    return (
      <div className="category-count">
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
      </div>
    );
  }
}

CategoryCount.propTypes = {
  data: PropTypes.array
};

export default CategoryCount;
