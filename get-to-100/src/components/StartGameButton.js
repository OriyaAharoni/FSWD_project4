import React, { Component } from 'react';

class StartGameButton extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      console.log("בדוק שהרכיב StartGameButton אכן עובר רינדור");
      return (
        <div>
          <button onClick={this.props.startGame}>Start Game!</button>
        </div>
      );
    }
  }

  export default StartGameButton;