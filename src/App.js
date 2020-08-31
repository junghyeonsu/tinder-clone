import React, { Component } from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import { firestore } from "./firebase";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/chat">
              <h1>I am the Chatpage</h1>
            </Route>
            <Route path="/">
              <TinderCards />
            </Route>
          </Switch>
          {/* Tinder Cards */}
          {/* Buttons belos tinder cards */}

          {/* Chats screen */}
          {/* Individual Chat screen */}

        </Router>
      </div>
    );
  }
}

export default App;
