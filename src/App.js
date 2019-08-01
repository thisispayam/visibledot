import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/Header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/UserActions';
import SigninAndSignupPage from './components/pages/SigninAndSignupPage/SigninAndSignupPage';
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
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndSignupPage />)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
