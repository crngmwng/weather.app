// import * as R from 'ramda'

// import {FETCH_TOWNS_SUCCESS} from '../actions/actionTypes'

// const initialState = {
//   ids: []
// }

// export default (state = initialState, {type, payload}) => {
//   switch (type) {
//     case FETCH_TOWNS_SUCCESS:
//       return R.merge(state, {
//         ids: R.pluck('id', payload)
//       })
//     default:
//       return state;
//   }
// }