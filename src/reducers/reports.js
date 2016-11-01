import { REPORTS__GET } from '../actions/ActionTypes';


const initialState = {
  reports: [],
  filteredReports: []
};

export default function reports(state = initialState, action) {
  switch (action.type) {
    case REPORTS__GET:
      return {
        reports: state.reports.concat(action.reports),
        filteredReports: state.reports.concat(action.reports),
      };
    default:
      return state;
  }
}
