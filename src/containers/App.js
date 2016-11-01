import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { VictoryPie, VictoryTooltip, Slice } from 'victory';
import { getReports } from '../actions/index';

import '../assets/css/App.css';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReports());
  }
  render() {
    const { reports } = this.props;
    if(reports.length > 1) {
      const categoryCount = {};
      reports.forEach(report => {
        categoryCount[report.category] = categoryCount[report.category] + 1 || 1;
      });
      const categoryCountData = [];
      for(var v in categoryCount) {
        categoryCountData.push({category: v, count: categoryCount[v]});

      }
      return (
        <div className="App">
          <FlashMessages />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Redux Starter v2!</h2>
            <div className="navigation">
              <Link to={'/list'} className="list-item">List Maker</Link>
              <Link to={'/about'} className="list-item">About</Link>
            </div>
          </div>
          <div className="App-body">
            {this.props.children}
          </div>
          <VictoryPie
            data={categoryCountData}
            x="category"
            y="count"
            height={150}
            width={150}
            colorScale="heatmap"
            labels={(datum) => `${datum.category} - ${datum.count}`}
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
                          console.log(props);
                          return {
                            style: Object.assign({}, props.style, {stroke: "transparent", strokeWidth: .3}),
                          }
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
                          console.log(props);
                          return {
                            style: Object.assign({}, props.style, {stroke: "black", strokeWidth: .3}),
                          }
                        }
                      }
                    ];
                  }
                }
              }
            ]}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          Loading
        </div>
      );
    }
  }
}

App.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  reports: PropTypes.array
};

function mapStateToProps(state) {
  return { reports: state.reports.reports };
}

export default connect(mapStateToProps)(App);
