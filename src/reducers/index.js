import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages';
import list from './list';
import reports from './reports';

const rootReducer = combineReducers({
  flashMessages,
  list,
  reports,
  routing
});

export default rootReducer;
