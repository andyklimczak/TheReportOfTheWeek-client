import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, Tooltip, Cell, YAxis } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

const CategoryCountBar = ({ data }) => {
  return (
    <BarChart
      width={1500}
      height={400}
      data={data}>
      <Tooltip />
      <XAxis
        dataKey="category"
      />
      <YAxis
        dataKey="count"
      />
      <Bar
        barSize={60}
        name="Reviews"
        dataKey="count"
        minPointSize={5}>
        {
          data.map((datum, index) => <Cell fill={categoryToColor(datum.category)} key={index} />)
        }
      </Bar>
    </BarChart>
  );
};

CategoryCountBar.propTypes = {
  data: PropTypes.array
};

export default CategoryCountBar;
