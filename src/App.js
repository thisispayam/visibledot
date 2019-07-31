import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/Header/Header';
import SigninAndSignout from './components/pages/SigninAndSignupPage/SigninAndSignupPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if userAuth is null or not
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); 
         
        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignout} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
