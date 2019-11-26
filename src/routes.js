import React from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home.js'
import About from './components/About/'
import Contacts from './components/Contacts/'
import HourlyWeather from './components/HourlyWeather/'
import WeatherForWeek from './components/WeatherForWeek/'

const Routes = () => {
  return(
    <HashRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hourly/:name" component={HourlyWeather} />
        <Route path="/week/:name" component={WeatherForWeek} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </HashRouter>
  );
}
export default Routes;