import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { VictoryPie } from 'victory';

import '../assets/css/App.css';


class App extends Component {
  render() {
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
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
