import './App.css';
import Homepage from './pages/homepage.component/homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop.component/shop';
import Header from './components/Header.component/Header';
import Authentication from './components/Auth.component/Authentication';
import ShopItem from './pages/ShopItem.component/Shop-item';
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentDidUnMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={Shop} />
          
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
