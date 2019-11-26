import * as R from 'ramda'

import {
    FETCH_FOR_WEEK_SUCCESS
  } from '../actions/actionTypes'

const initialState = { 
  date: [ ],
  temp: [ ],
  wind_spd: [ ],
  wind_cdir: [ ],
  precip: [ ],
  pop: [ ],
  weather: { },
  description: [ ],
  pres: [ ]
 }

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_FOR_WEEK_SUCCESS:
      return R.merge(state, {
        date: R.pluck('datetime', payload.body.data),
        temp: R.pluck('temp', payload.body.data),
        wind_spd: R.pluck('wind_spd', payload.body.data),
        wind_cdir: R.pluck('wind_cdir', payload.body.data),
        precip: R.pluck('precip', payload.body.data),
        pop: R.pluck('pop', payload.body.data),
        pres: R.pluck('pres', payload.body.data),
        weather: R.pluck('weather', payload.body.data),
       // description: R.pluck('description', payload.body.data)
      })
      
      default:
      return state
  }
}