import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: 'teste',
        email: '123123@example.com',
        password: '3333',
        gender: ''
      },
    }
    this.register = this.register.bind(this);
    this.formChange = this.formChange.bind(this);
  }

  register(event) {
    const { name, email, password, gender } = this.state.form;
    name !== '' && email !== '' && password !== '' && gender != '' ?
      alert(`All fields filled in! \nSelling your information to the chinese mafia... \n\nName: ${name} \nEmail: ${email} \nPassword: ${password} \nGender: ${gender}`) :
      this.setState({ error: 'Looks like you missed some fieds...' });
    event.preventDefault();
  }

  formChange(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }


  render() {
    return (
      <div>
        <h1>New user</h1>
        {this.state.error && <p id='error-alert'>{this.state.error}</p>}
        <form onSubmit={this.register}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.form.name}
              onChange={this.formChange}></input>
          </div>
          <br /><br />
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={this.state.form.email} 
              onChange={this.formChange}></input>
          </div>
          <br /><br />
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.form.password} 
              onChange={this.formChange}></input>
          </div>
          <br /><br />
          <div>
            <label>Gender:</label>
            <select name="gender" value={this.state.form.gender} 
              onChange={this.formChange}>
              <option value={''}>Select Gender</option>
              <option value={'male'}>Male</option>
              <option value={'female'}>Female</option>
              <option value={'testes'}>Don't specify</option>
            </select>
          </div>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;