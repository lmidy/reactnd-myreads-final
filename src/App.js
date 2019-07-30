import React , {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import SearchBooks from './Components/SearchBooks';


class App extends Component {
  render() {
    return (
      <div className="app">
      	<Switch>
      	  <Route exact path="/" component={Home} />
      	  <Route path="/search" component={SearchBooks} />
      	</Switch>
      </div>
    )
  }
}

export default App;
