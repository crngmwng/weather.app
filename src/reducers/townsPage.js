import * as R from 'ramda'
import {FETCH_TOWNS_SUCCESS} from '../actions/actionTypes'
const initialState = {
  names: [ ]
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_TOWNS_SUCCESS:
      return R.merge(state, {
        names: R.pluck('name', payload)
      })
    default:
      return state;
  }
}