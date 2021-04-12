import './App.css';
import Homepage from './pages/homepage.component/homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop.component/shop'
import Header from './components/Header.component/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
