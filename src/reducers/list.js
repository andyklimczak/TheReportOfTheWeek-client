import { REPORTS__GET } from '../actions/ActionTypes';


const initialState = {
  items: ['example item']
};

export default function report(state = initialState, action) {
  switch (action.type) {
    case REPORTS__GET:
      console.log('test');
      return state;
    default:
      return state;
  }
}
