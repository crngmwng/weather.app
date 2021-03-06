import * as R from 'ramda'

import {
    FETCH_HOURLY_SUCCESS
  } from '../actions/actionTypes'

const initialState = {  }

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_HOURLY_SUCCESS:
      return R.merge(state, payload.body.data)
      
      default:
      return state
  }
}