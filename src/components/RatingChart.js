import React, { Component, PropTypes } from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ResponsiveContainer } from 'recharts';
import RatingChartTooltip from './RatingChartTooltip';
import datalib from 'datalib';

import '../assets/css/ListItemForm.css';

const dateFormat = (time) => new Date(time).toISOString().slice(0, 10);
const getTicks = data => {
  return data.map(datum => datum.dateReleased.getTime());
};


class RatingChart extends Component {
  computeLinearRegression(data) {
    // TODO CLEANUP
    if(data.length > 1) {
      const time = data.map(datum => {
        return datum.dateReleased.getTime();
      });
      const rating = data.map(datum => {
        return datum.rating;
      });
      const lin = datalib.linearRegression(time, rating);
      return time.map(instance => {
        return { x: new Date(instance), y: lin.slope * instance + lin.intercept };
      });
    }
  }
  render() {
    //const linearRegression = this.computeLinearRegression(this.props.data);
    const { data } = this.props;
    return (
      <ResponsiveContainer aspect={9/3}>
        <ScatterChart>
          <YAxis
            ticks={[2,4,6,8,10]}
            domain={[0, 10.5]}
            dataKey={'rating'}
          />
          <XAxis
            dataKey={'dateReleasedUnix'}
            type="number"
            tickCount={8}
            tickFormatter={dateFormat}
            domain={[new Date(2011, 1, 1).getTime(), new Date().getTime()]}
          />
          <Scatter
            data={data}
            onClick={(e) => window.open(`https://www.youtube.com/watch?v=${e.videoCode}`) }
          />
          <Tooltip content={<RatingChartTooltip/>} />
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
