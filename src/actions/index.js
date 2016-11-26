import * as types from './ActionTypes';

export function addItem(item) {
  return dispatch => {
    dispatch(addFlashMessage(`Successfully added "${item}"!`, 'notification'));
    dispatch(addItemSuccess(item));
  };
}

export function addItemSuccess(item) {
  return { type: types.ITEM__CREATE, item };
}

export function addFlashMessage(text, messageType = 'error') {
  return { type: types.FLASH_MESSAGE__CREATE, text, messageType };
}

export function dismissFlashMessage(stamp) {
  return dispatch => {
    // NOTE: Without this timeout, a bug occurs that causes one
    // or more closely-timed flash messages to get skipped over.
    setTimeout(() => {
      dispatch(deleteFlashMessage(stamp));
    }, 500);
  };
}

export function deleteFlashMessage(timestamp) {
  return { type: types.FLASH_MESSAGE__DELETE, timestamp };
}

export function getReports() {
  return dispatch => {
    setTimeout(() => {
      fetch('https://thereportoftheweek-api.herokuapp.com/reports')
      .then(res => {
        return res.json();
      }).then(json => {
        return json.map(review => {
          return {
            category: review.category,
            dateReleased: new Date(review.dateReleased),
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
    }, 5000);
  };
}

export function filterReports(reportCategory) {
  return { type: types.REPORTS__FILTER, reportCategory };
}

export function setReports(reports) {
  return { type: types.REPORTS__GET, reports };
}
