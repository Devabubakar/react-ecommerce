import Homepage from './pages/homepage.component/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop.component/shop';
import Header from './components/header/header.component';
import Authentication from './components/signup.signin/signup.signin.component';

import { connect, useDispatch, useSelector } from 'react-redux';

import CheckOut from './components/checkout/checkout.component';

import React, { useEffect } from 'react';

import { checkUserSession } from './redux/user/user.actions';
import GlobalStyles from './global.styles/globals.styles';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />

        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <Authentication />
          }
        />
        <Route exact path='/checkout' component={CheckOut} />
      </Switch>
    </div>
  );
};

export default App;
