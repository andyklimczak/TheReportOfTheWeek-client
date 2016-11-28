import React, { Component, PropTypes } from 'react';
import { VictoryPie, Slice, VictorySharedEvents, VictoryBar, VictoryLabel } from 'victory';

import '../assets/css/ListItemForm.css';

class CategoryCount extends Component {
  render() {
    return (
      <svg viewBox="0 0 450 170">
        <VictorySharedEvents
          events={[{
            childName: ["pie", "bar"],
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  childName: ["pie", "bar"],
                  mutation: (props) => {
                    return {
                      style: Object.assign({}, props.style, {fill: "tomato"})
                    };
                  }
                }];
              },
              onMouseOut: () => {
                return [{
                  childName: ["pie", "bar"],
                  mutation: () => {
                    return null;
                  }
                }];
              }
            }
          }]}
        >
          <g transform={"translate(170, 0)"}>
            <VictoryBar name="bar"
              width={200}
              height={200}
              standalone={false}
              style={{
                data: { width: 10 },
                labels: {fontSize: 2}
              }}
              labels={(datum) => datum.category}
              data={this.props.data}
              x="category"
              y="count"
              labelComponent={<VictoryLabel y={160}/>}
            />
          </g>
          <VictoryPie
            name="pie"
            standalone={false}
            data={this.props.data}
            x="category"
            y="count"
            height={200}
            width={200}
            style={{
              labels: {fontSize: 2, fill: "transparent"},
            }}
          />
        </VictorySharedEvents>
      </svg>
    );
  }
}

CategoryCount.propTypes = {
  data: PropTypes.array
};

export default CategoryCount;
