import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import reports from './reports';

const rootReducer = combineReducers({
  reports,
  routing
});

export default rootReducer;
