import React from 'react';
import Home from './router/Home';
import Cv from './router/Cv';
import About from './router/About';

import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/about"> <About/> </Route>
        <Route path="/cv"> <Cv/> </Route>
      </Switch>
    </div>
  );
}

export default App;
