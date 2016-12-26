import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

import '../assets/css/ListItemForm.css';

class CategoryYearlyStacked extends Component {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer
        aspect={9/3}
      >
        <BarChart
          margin={{ top: 40}}
          data={data}
        >
          <YAxis />
          <XAxis
            dataKey="year"/>
          <Bar stackId="a" dataKey='Energy Crisis' fill={categoryToColor('Energy Crisis')} barSize={60} />
          <Bar stackId="a" dataKey='Running On Empty' fill={categoryToColor('Running On Empty')} barSize={60} />
          <Bar stackId="a" dataKey='Drink Review' fill={categoryToColor('Drink Review')} barSize={60} />
          <Bar stackId="a" dataKey='Review' fill={categoryToColor('Review')} barSize={60} />
          <Bar stackId="a" dataKey='Meal Review' fill={categoryToColor('Meal Review')} barSize={60} />
          <Tooltip />
          <Legend />
          <CartesianGrid />
        </BarChart>
    </ResponsiveContainer>
    );
  }
}

CategoryYearlyStacked.propTypes = {
  data: PropTypes.array
};

export default CategoryYearlyStacked;
