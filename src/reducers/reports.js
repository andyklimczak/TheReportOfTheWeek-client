import { REPORTS__GET, REPORTS__FILTER } from '../actions/ActionTypes';


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
    case REPORTS__FILTER:
      if(action.reportCategory === 'Reset') {
        return {
          reports: state.reports,
          filteredReports: state.reports
        };
      } else {
        return {
          reports: state.reports,
          filteredReports: state.reports.filter(report => {
            return report.category === action.reportCategory;
          })
        };
      }
    default:
      return state;
  }
}
