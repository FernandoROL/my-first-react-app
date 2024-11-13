import React, { Component } from "react";
import { fortunes } from "./assets/fortunes";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phraseText: 'Click the cookie...'
    };
    this.phrase = fortunes;

    this.biscuitFortune = this.biscuitFortune.bind(this);
  }

  biscuitFortune(){
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.phrase.length);
    state.phraseText = this.phrase[randomNumber];
    this.setState(state);
  }

  render() {
    return (
      <div className="main">
        <Botao btnAction={this.biscuitFortune} name='Give me fortune'/>
        <h3 className="phrase">{`" ${this.state.phraseText} "`}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img id="biscuit" src={require("./assets/biscoito.png")} />
          <div className="middle">
            <button id="fortune-button" onClick={this.props.btnAction}>{this.props.name}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;