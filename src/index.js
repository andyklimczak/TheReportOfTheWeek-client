import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactGA from 'react-ga';

import './assets/css/index.css';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactGA.initialize('UA-100026494-1');

render(
  <Root store={store} history={history} onUpdate={logPageView} />,
  document.getElementById('root')
);
