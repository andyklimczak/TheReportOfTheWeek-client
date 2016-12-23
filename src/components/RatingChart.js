import React, { Component, PropTypes } from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ResponsiveContainer, ReferenceLine } from 'recharts';
import RatingChartTooltip from './RatingChartTooltip';
import datalib from 'datalib';

import '../assets/css/ListItemForm.css';

const dateFormat = (time) => new Date(time).toISOString().slice(0, 4);
const getTicks = () => {
  return [2011, 2012, 2013, 2014, 2015, 2016].map(time => new Date(time, 0, 1).getTime());
};
const average = (data) => {
  return data.reduce((accu, datum) => {
    return accu + datum.rating;
  }, 0) / data.length;
};

class RatingChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer
        aspect={9/3}
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
            type="number"
            ticks={getTicks()}
            tickFormatter={dateFormat}
            domain={[new Date(2011, 0, 1).getTime(), new Date().getTime()]}
          />
          <Scatter
            data={data}
            onClick={(e) => window.open(`https://www.youtube.com/watch?v=${e.videoCode}`) }
          />
          <Tooltip content={<RatingChartTooltip/>} />
          <ReferenceLine
            y={average(data)}
            label={`${average(data).toFixed(2)} avg`}
            stroke="red"
            strokeDasharray="3 3"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}

RatingChart.propTypes = {
  data: PropTypes.array,
  averageRating: PropTypes.number
};

export default RatingChart;
