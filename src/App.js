import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.register = this.register.bind(this);
  }

  register(event){
    const {name, email, password} = this.state;
    name !== '' && email !== '' && password !== '' ?
    alert(`All fields filled in! \nSelling your information to the chinese mafia... \n\nName: ${name} \nEmail: ${email} \nPassword: ${password}`) :
    this.setState({error: 'Looks like you missed some fieds...'});
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>New user</h1>
        {this.state.error && <p id='error-alert'>{this.state.error}</p>}
        <form onSubmit={this.register}>
          <label>Name:</label>
          <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
          <br/><br/>
          <label>Email:</label>
          <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
          <br/><br/>
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}></input>
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;