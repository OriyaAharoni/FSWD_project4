import React, { Component } from 'react';

class AddPlayerButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playerName: '',
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ playerName: event.target.value });
    }
  
    handleAddPlayer = () => {
      const { playerName } = this.state;
      // Pass player name to a function that will open a game board for the new player
      this.props.addPlayer(playerName);
      this.setState({ playerName: '' });
    }
  
    render() {
        console.log(this.props); // <-- add this line
      return (
        <div>
          <input
            type="text"
            value={this.state.playerName}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddPlayer}>Add Player</button>
        </div>
      );
    }
  }

  export default AddPlayerButton;