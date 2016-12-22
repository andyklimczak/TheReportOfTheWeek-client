import { REPORTS__GET, REPORTS__FILTER } from '../actions/ActionTypes';


const initialState = {
  reports: [],
  filteredReports: []
};

export default function reports(state = initialState, action) {
  switch (action.type) {
    case REPORTS__GET:
      return Object.assign({}, state, {
        reports: action.reports,
        filteredReports: action.reports
      });
    case REPORTS__FILTER:
      if(action.reportCategory === 'Reset') {
        return Object.assign({}, state, {
          filteredReports: state.reports
        });
      } else {
        return Object.assign({}, state, {
          filteredReports: state.reports.filter(report => {
            return report.category === action.reportCategory;
          })
        });
      }
    default:
      return state;
  }
}
