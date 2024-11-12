import React, { Component } from "react";

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }

    entrar(name) {
        this.setState({ name: name });
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <button onClick={() => this.entrar(prompt('Name:'))}>
                    Login
                </button>
                <button onClick={() => this.setState({ name: '' })}>
                    Log out
                </button>
            </div>
        );
    }
}

export default Member;