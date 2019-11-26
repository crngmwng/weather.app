import * as R from 'ramda'

import {ADD_TO_RECENTLY_VIEWED} from '../actions/actionTypes'

const initialState = {
  paths: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_RECENTLY_VIEWED:
        return R.merge(state, {
          paths: R.append(payload, state.paths)
        })
    default:
      return state
  }
}