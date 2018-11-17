import React, { Component } from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <img src="ctsw_logo.png" alt="CodingTheSmartWay.com" height="96" />
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img
                src="angular_logo.svg"
                alt="Angular"
                height="96"
                onClick={this.handleVoteAngular}
              />
            </div>
            <div className="col-xs-2">
              <img
                src="react_logo.svg"
                alt="React"
                height="96"
                onClick={this.handleVoteReact}
              />
            </div>
            <div className="col-xs-2">
              <img
                src="vuejs_logo.svg"
                alt="Vue.js"
                height="96"
                onClick={this.handleVoteVuejs}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
