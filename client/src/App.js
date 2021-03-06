
import { Route, Switch, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error.boundaries/error-boundaries.component';

import React, { useEffect, lazy, Suspense } from 'react';

import { checkUserSession } from './redux/user/user.actions';
import GlobalStyles from './global.styles/globals.styles';

const Homepage = lazy(() => import('./pages/homepage.component/homepage'));
const Header = lazy(() => import('./components/header/header.component'));
const Shop = lazy(() => import('./pages/shop.component/shop'));
const CheckOut = lazy(() => import('./components/checkout/checkout.component'));
const Authentication = lazy(() =>
  import('./components/signup.signin/signup.signin.component')
);

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Header />
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />

            <Route
              exact
              path='/signin'
              component={Authentication}
            />
            <Route exact path='/checkout' component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
