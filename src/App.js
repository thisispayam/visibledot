import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/Header/Header';
import SigninAndSignout from './components/pages/SigninAndSignupPage/SigninAndSignupPage';

function App() {
  return (

    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignout} />
      </Switch>
    </div>
  );
}

export default App;
