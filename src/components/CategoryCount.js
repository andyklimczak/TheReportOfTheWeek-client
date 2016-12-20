import React, { Component, PropTypes } from 'react';
import { VictoryPie, Slice, VictorySharedEvents, VictoryBar, VictoryLabel } from 'victory';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
      </div>
    );
  }
}

CategoryCount.propTypes = {
  data: PropTypes.array
};

export default CategoryCount;
