import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { VictoryPie } from 'victory';
import { getReports } from '../actions/index';

import '../assets/css/App.css';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReports());
  }
  render() {
    const { reports } = this.props;
    console.log(reports);
    if(reports.length > 1) {
      const categoryCount = {};
      reports.forEach(report => {
        console.log(report.category);
        categoryCount[report.category] = categoryCount[report.category] + 1 || 1;
      });
      console.log(categoryCount);
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
            labelRadius={80}
            data={[
            {x: 'a', y: 4},
            {x: 'b', y: 2},
            {x: 'c', y: 9},
            {x: 'd', y: 8},
            {x: 'e', y: 3},
          ]} />
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
