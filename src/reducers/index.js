import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages';
import list from './list';
import report from './report';

const rootReducer = combineReducers({
  flashMessages,
  list,
  report,
  routing
});

export default rootReducer;
