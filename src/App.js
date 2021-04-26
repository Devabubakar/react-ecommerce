import './App.css';
import Homepage from './pages/homepage.component/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/Shop.component/shop';
import Header from './components/Header.component/Header';
import Authentication from './components/Auth.component/Authentication';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/UserReducer/userActions';
import  CheckOut  from './components/Checkout.component/CheckOut';

import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
