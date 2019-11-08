import React from 'react';
import Home from './Home';
import CreateAcount from './Navegador';
import Logueado from './Logueado';
//import Navegador from './Navegador';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App(){
    return(
      <Router>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/logueado" component={Logueado}/>
            <Route path="/create-acount" component={CreateAcount}/>
          </Switch>
      </Router>
        
    )
}
export default (App);