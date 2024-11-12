import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Fernando',
      counter: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.counter += 1;
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    state.counter -= 1;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h1>Counter Teste</h1>
        <h3>
          <button onClick={this.aumentar}>+</button>
          {this.state.counter}
          <button onClick={this.diminuir}>-</button>
        </h3>
      </div>
    );
  }
}

export default App;
