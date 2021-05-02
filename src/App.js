import './App.css';
import Homepage from './pages/homepage.component/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop.component/shop';
import Header from './components/header/header.component';
import Authentication from './components/signup.signin/signup.signin.component';
import {
  createUserProfileDocument,
  addCollectionAndDocument,
} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import CheckOut from './components/checkout/checkout.component';

import React from 'react';
import { auth } from './firebase/firebase.utils';
import { collectionObject} from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      
      await addCollectionAndDocument(
        'shop',
        collectionArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  componentDidUnMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />

          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <Authentication />
            }
          />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  collectionArray: collectionObject
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
