import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'email@example.com',
      password: 'pass',
      sex: 'male'
    }

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeSex = this.changeSex.bind(this);
  }

  changeEmail(e){
    let inputValue = e.target.value;
    this.setState({email: inputValue});
  }

  changePassword(e){
    let inputValue = e.target.value;
    this.setState({password: inputValue});
  }

  changeSex(e){
    let inputValue = e.target.value;
    this.setState({sex: inputValue});
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        Email: <br/>
        <input type='email' name='email' value={this.state.email}
          onChange={this.changeEmail} />
        <br/><br/>
        Senha: <br/>
        <input type='password' name='password' value={this.state.password} 
          onChange={this.changePassword} />
        <br/><br/>
        gender: <br/>
        <select name="sex" value={this.state.sex} onChange={this.changeSex}>
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
        </select>
        <br/><br/>

        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.password}</h3>
          <h3>{this.state.sex}</h3>
        </div>
      </div>
    );
  }
}

export default App;