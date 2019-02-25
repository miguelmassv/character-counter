import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: ""
    };

  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.counter.bind(this)} value={this.state.value}></textarea>
        <div className="counter">{this.state.value.length}</div>
      </div>
    );
  }

counter(event){
  this.setState({
    value: event.target.value
  })
};
}

export default App;
