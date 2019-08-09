import React from 'react';
import ShopPage from './components/pages/ShopPage/ShopPage';
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import Header from './components/Header/Header';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/UserActions';
import SigninAndSignupPage from './components/pages/SigninAndSignupPage/SigninAndSignupPage';
import { selectCurrentUser } from './redux/user/UserSelectors';

import { selectCollectionsForPreview } from './redux/shop/ShopSelectors';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser, collectionArray} = this.props;

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
        addCollectionAndDocuments('collections', collectionArray.map(({title, items})=> ({title, items})));
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
          <Route path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndSignupPage />)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
