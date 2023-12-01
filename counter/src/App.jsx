import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  handlePlus=()=>{
    this.setState({
      count: this.state.count+1
    })
  }
  handleMinus=()=>{
    this.setState({
      count: this.state.count-1
    })
  }
  handleReset=()=>{
    this.setState({
      count: 0
    })
  }
  render(){
    return (
      <div className="App">
        <h2>Counter</h2>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handlePlus}>+</button>
          <button onClick={this.handleMinus}>-</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;