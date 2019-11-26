import * as R from 'ramda'

import {
    FETCH_FOR_WEEK_SUCCESS
  } from '../actions/actionTypes'

const initialState = { 
 }

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_FOR_WEEK_SUCCESS:
      return R.merge(state,
        R.indexBy(R.prop("datetime"), payload.body.data)
    )
      
      default:
      return state
  }
}