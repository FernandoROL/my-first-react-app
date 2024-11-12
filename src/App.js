import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, user: 'Fernando', likes: 20, comments: 2},
        {id: 2, user: 'Lucas', likes: 69, comments: 24},
        {id: 3, user: 'Mateus', likes: 200, comments: 21},
        {id: 4, user: 'Joelma', likes: 1, comments: 1},
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.feed.map((item) => {
            return(
              <Feed key={item.id} user={item.user}
               likes={item.likes} comments={item.comments}></Feed>
            );
          })
        }
      </div>
    );
  }
}

export default App;