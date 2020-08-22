import React, { Component } from 'react';
import './App.css';
import { firestore } from "./firebase";
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    data : 0
  }

  componentDidMount(){
    firestore.collection("test")
    .doc("friend")
    .get()
    .then(doc => {
      this.setState({
        data : doc.data().friend_count
      }) 
    })
  }
  
  onClickUpButton = () => {  
    firestore.collection("test")
    .doc("friend")
    .update({
      friend_count : this.state.data + 1
    })
    .then(
      this.setState({
        data : this.state.data + 1
      })
    )
  }

  onClickDownButton = () => {
    firestore.collection("test")
    .doc("friend")
    .update({
      friend_count : this.state.data - 1
    })
    .then(
      this.setState({
        data : this.state.data - 1
      })
    )
  }

  render(){
    return (
      <div className="App">
        <h1>Let's build the TINDER Clone App!</h1>
        <h2> 현재 친구는 {this.state.data}명 입니다.</h2>
        <Button variant="primary" onClick={this.onClickUpButton}>친구 늘리기</Button><br />
        <Button variant="danger"  onClick={this.onClickDownButton}>친구 줄이기</Button>
      </div>
    );
  }
}

export default App;
