import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from './App'

export default function Ruta(){
  return( 
    <Router>
    
    <Switch>
          <Route path="/buscar/:parametroRuta">
          <App />
          </Route>
          <Route path="/" exact>
          <App />
          </Route>
        </Switch>
    </Router>
  )
}