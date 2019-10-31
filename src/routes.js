import React from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home.js'

 let Routes = () => {
  return(
    <HashRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/townsvea1" component={TownInDetail} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}
export default Routes;