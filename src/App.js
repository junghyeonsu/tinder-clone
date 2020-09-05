import React, { Component } from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import { firestore } from "./firebase";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
        <Header />
          <Switch>
            <Route path="/chat">
              <h1>I am the Chat page</h1>
            </Route>
            <Route path="/">
              <TinderCards />
              <SwipeButtons />
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
