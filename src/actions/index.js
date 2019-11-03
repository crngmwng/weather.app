import {
    FETCH_TOWNS_START,
    FETCH_TOWNS_SUCCESS,
    FETCH_TOWNS_FAILURE,
    FETCH_HOURLY_START,
    FETCH_HOURLY_SUCCESS,
    FETCH_HOURLY_FAILURE
} from './actionTypes'

import {fetchHourlyWeatherApi} from '../api'


export const fetchTowns = () => async dispatch => {
    dispatch({type: FETCH_TOWNS_START})
  
    try {
      fetch('http://www.mocky.io/v2/5dbc0bc0310000d5ce4c0e32')
        .then(res => res.json())
        .then(towns => {
          dispatch({
            type: FETCH_TOWNS_SUCCESS,
            payload: towns
          })
        })
    }catch (err) {
      dispatch({
        type: FETCH_TOWNS_FAILURE,
        payload: err,
        error: true
      })
    }
  }

  export const fetchHourlyWeather = (name) => async dispatch => {
    dispatch({type: FETCH_HOURLY_START})
  
    try {
      fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${name}&key=ced73555abfb464ebcb5d7e77f5be270&hours=24`)
        .then(res => res.json())
        .then(body => {
            dispatch({
              type: FETCH_HOURLY_SUCCESS,
              payload: {body}
            })
          })
    } catch (err) {
      dispatch({
        type: FETCH_HOURLY_FAILURE,
        payload: err,
        error: true
      })
    }
  }