import React, { Component } from "react";

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.user}</h3>
                <a>{this.props.likes}</a> {this.props.likes === 1 ? 'Like' : 'Likes'} / {this.props.comments} {this.props.comments === 1 ? 'Comment' : 'Comments'}
                <hr/>
            </div>
        );
    }
}

export default Feed;