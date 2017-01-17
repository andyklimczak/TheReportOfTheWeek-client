import React, { PropTypes } from 'react';
import { Tooltip, PieChart, Pie, Cell } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

const CategoryCountPie = ({ data }) => {
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
};

CategoryCountPie.propTypes = {
  data: PropTypes.array
};

export default CategoryCountPie;
