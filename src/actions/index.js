import * as types from './ActionTypes';

export function getReports() {
  return dispatch => {
      fetch(`${process.env.API_URL}/reports`)
      .then(res => {
        return res.json();
      }).then(json => {
        return json.map(review => {
          return {
            category: review.category,
            dateReleased: new Date(review.dateReleased),
            dateReleasedUnix: parseInt(new Date(review.dateReleased).getTime(), 10),
            manufacturer: review.manufacturer,
            product: review.product,
            rating: review.rating,
            videoCode: review.videoCode,
            videoTitle: review.videoTitle
          };
        });
      }).then(json => {
        dispatch(setReports(json));
      });
  };
}

export function filterReports(reportCategory) {
  return { type: types.REPORTS__FILTER, reportCategory };
}

export function setReports(reports) {
  return { type: types.REPORTS__GET, reports };
}
