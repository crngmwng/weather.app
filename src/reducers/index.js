import * as R from 'ramda'

const initialState = { }

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case "FETCH_TOWNS_SUCCESS":
     return Object.assign({}, state, {
       towns: payload
     })

      default:
      return state;
  }
}