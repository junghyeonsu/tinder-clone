import React, { Component } from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import { firestore } from "./firebase";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">  
              <Header />
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
