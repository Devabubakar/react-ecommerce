import './App.css';
import Homepage from './pages/homepage.component/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop.component/shop';
import Header from './components/header/header.component';
import Authentication from './components/signup.signin/signup.signin.component';

import { connect } from 'react-redux';

import CheckOut from './components/checkout/checkout.component';

import React from 'react';

import { collectionObject } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  componentDidMount(){
    const {checkUserSession} = this.props
    checkUserSession()
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
  collectionArray: collectionObject,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
