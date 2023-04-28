import React, { Component } from 'react';

class StartGameButton extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div style={{visibility: this.props.isGameStart ? 'hidden' : 'visible'}}>
          <button onClick={this.props.startGame}>Start Game!</button>
        </div>
      );
    }
  }

  export default StartGameButton;