import React, { Component, PropTypes } from 'react';
import { VictoryPie, Slice } from 'victory';

import '../assets/css/ListItemForm.css';


class CategoryPie extends Component {
  render() {
    return (
      <VictoryPie
        data={this.props.data}
        x="category"
        y="count"
        height={150}
        width={150}
        colorScale="heatmap"
        labels={(datum) => `${datum.category} - ${datum.count} videos`}
        labelRadius={30}
        dataComponent={<Slice />}
        style={{
          labels: {fontSize: 2, fill: "transparent"},
        }}
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseOut: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {fill: "transparent"}),
                      };
                    },
                  }, {
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {stroke: "transparent", strokeWidth: .3}),
                      };
                    }
                  }
                ];
              },
              onMouseOver: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {fill: "black"}),
                      };
                    }
                  }, {
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {stroke: "black", strokeWidth: .3}),
                      };
                    }
                  }
                ];
              }
            }
          }
        ]}
      />
    );
  }
}

CategoryPie.propTypes = {
  data: PropTypes.array
};

export default CategoryPie;
