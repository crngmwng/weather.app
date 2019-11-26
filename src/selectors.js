import * as R from 'ramda'

const getTownByName = (state, name) => state.towns[name]


export const getTowns = state => {
  const towns = R.map(name => getTownByName(state, name), state.townsPage.names)

  return towns
} 
