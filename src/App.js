import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      name: props.name
    }

    this.log = this.log.bind(this);
  }

  log(){
    this.state.status ? 
    this.setState({status: false, name: ''}) :
    this.setState({status: true, name: prompt('Name:')})
  }

  render() {
    return (
      <div>
        {this.state.status ?
          <div>
            <h1>Welcome, {this.state.name}!</h1>
            <button onClick={this.log}>Logout</button>
          </div>
          :
          <div>
            <h2>Hi Guest! Please, log in.</h2>
            <button onClick={this.log}>Login</button>
          </div>
        }
      </div>
    );
  }
}

export default App;