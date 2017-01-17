import React, { PropTypes } from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import RatingChartTooltip from './RatingChartTooltip';
import { categoryToColor } from '../utils/utils.js';

const dateFormat = (time) => new Date(time).toISOString().slice(0, 4);
const getTicks = () => {
  return [2011, 2012, 2013, 2014, 2015, 2016].map(time => new Date(time, 0, 1).getTime());
};
const average = (data) => {
  return data.reduce((accu, datum) => {
    return accu + datum.rating;
  }, 0) / data.length;
};

const RatingChart = ({ data, filterReports, categories }) => {
  return (
    <div>
      <ResponsiveContainer
        aspect={7/3}
      >
        <ScatterChart
          margin={{ top: 20, right: 90}}
        >
          <YAxis
            ticks={[2,4,6,8,10]}
            domain={[0, 10]}
            dataKey={'rating'}
          />
          <XAxis
            dataKey={'dateReleasedUnix'}
            type='number'
            ticks={getTicks()}
            tickFormatter={dateFormat}
            domain={[new Date(2011, 0, 1).getTime(), new Date().getTime()]}
          />
          <Scatter
            data={data}
            onClick={(e) => window.open(`https://www.youtube.com/watch?v=${e.videoCode}`) }
          >
            {
              data.map((datum, index) => <Cell cursor="pointer" fill={categoryToColor(datum.category)} key={index} />)
            }
          </Scatter>
          <Tooltip content={<RatingChartTooltip/>} />
          <ReferenceLine
            y={average(data)}
            label={`${average(data).toFixed(2)} avg`}
            stroke='navy'
            strokeDasharray='3 3'
          />
          <CartesianGrid />
        </ScatterChart>
      </ResponsiveContainer>
      {categories.map((category, i) => {
        return <button onClick={filterReports} className="pure-button" value={category} key={i}>{category}</button>;
      })}
      <button onClick={filterReports} className="pure-button" value="Reset">Reset</button>
    </div>
  );
};

RatingChart.propTypes = {
  data: PropTypes.array,
  filterReports: PropTypes.func,
  categories: PropTypes.array,
};

export default RatingChart;
