import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';

function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
