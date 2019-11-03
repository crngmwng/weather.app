import * as R from 'ramda'

import {
    FETCH_HOURLY_SUCCESS
  } from '../actions/actionTypes'

const initialState = {  }

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_HOURLY_SUCCESS:
      // const newValues = R.indexBy(R.prop("timestamp_local"), payload.body.data)
      return R.merge(state, payload.body.data)
      
      default:
      return state
    }
  }