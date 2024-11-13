import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'START'
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.button = "START";
    } else {
        this.timer = setInterval(() => {
        let state = this.state;
        state.number += 0.01;
        this.setState(state);
      }, 10);
      state.button = "PAUSE"
    }

    this.setState(state);
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } 
    let state = this.state;
    state.number = 0;
    state.button = "START";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img className="cronometro" src={require('./assets/cronometro.png')}></img>
        <a className="timer">{this.state.number.toFixed(2)}</a>
        <div className="areaBtn">
          <a className="acoes" onClick={this.start}>{this.state.button}</a>
          <a className="acoes" onClick={this.reset}>RESET</a>
        </div>
      </div>
    );
  }
}

export default App;