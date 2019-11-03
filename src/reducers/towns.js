import * as R from 'ramda'

import {
    FETCH_TOWNS_SUCCESS
  } from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_TOWNS_SUCCESS:
      const newValues = R.indexBy(R.prop("name"), payload)
      return R.merge(state, newValues)
      
      default:
      return state
    }
}