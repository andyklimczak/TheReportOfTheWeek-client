import { REPORTS__GET } from '../actions/ActionTypes';


const initialState = {
  reports: []
};

export default function reports(state = initialState, action) {
  switch (action.type) {
    case REPORTS__GET:
      console.log('test', action);
      return { reports: state.reports.concat(action.reports) };
    default:
      return state;
  }
}
