import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/Header/Header';
import SigninAndSignout from './components/pages/SigninAndSignupPage/SigninAndSignupPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/UserActions';
class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if userAuth is null or not
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); 
         
        userRef.onSnapshot(snapShot => {
            setCurrentUser({        
                id: snapShot.id,
                ...snapShot.data()            
            })
          });
      } else {
        setCurrentUser(userAuth);
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
