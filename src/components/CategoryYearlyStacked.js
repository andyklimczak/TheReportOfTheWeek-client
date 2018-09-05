import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

const CategoryYearlyStacked = ({ data, categories }) => {
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
          {categories.map(category => {
            return <Bar stackId="a" dataKey={category} fill={categoryToColor(category)} barSize={60} key={category} />;
          })}
        <Tooltip />
        <Legend />
        <CartesianGrid />
      </BarChart>
    </ResponsiveContainer>
  );
};

CategoryYearlyStacked.propTypes = {
  data: PropTypes.array,
  categories: PropTypes.array,
};

export default CategoryYearlyStacked;
