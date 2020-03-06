import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homapage/homepage.component.';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
