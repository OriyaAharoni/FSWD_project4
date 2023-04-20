import React, { Component } from 'react';
import GameBoard from './GameBoard.js';
import './Game.css';
import AddPlayerButton from './AddPlayerButton.js';
import StartGameButton from './StartGameButton.js';

let temp = [];
let playersTemp = [];
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activatePlayers: temp,
      players: playersTemp,
      currentGameBoardIndex: null
    };
  }

  

  activatePlayer = (index) => {
    temp = [...this.state.activatePlayers]; // create a new copy of the activatePlayers array
    if (this.state.activatePlayers[index] && this.state.activatePlayers[index].props) { // check if the first element and its props object exist
      temp[index] = React.cloneElement(temp[index], {isActive: true}); // modify the isActive prop of the first element
    }
    this.setState({ 
      activatePlayers: temp,
      currentGameBoardIndex: index // combine both state updates into one call
    }, () => {
      console.log(this.state.activatePlayers);
    });
  }

  activeNextPlayer = () => {
    const index = this.state.currentGameBoardIndex;
    const nextIndex = (index+1) % this.state.activatePlayers.length;
    temp = [...this.state.activatePlayers]; // create a new copy of the activatePlayers array
    if (this.state.activatePlayers[index] && this.state.activatePlayers[index].props) { // check if the first element and its props object exist
      temp[index] = React.cloneElement(temp[index], {isActive: false}); // modify the isActive prop of the first element
      temp[nextIndex] = React.cloneElement(temp[nextIndex], {isActive: true});
    }
    this.setState({ 
      activatePlayers: temp,
      currentGameBoardIndex: nextIndex // combine both state updates into one call
    }, () => {
      console.log(this.state.activatePlayers);
    });
  }

  addPlayer = (playerName) => {
    // Create a new game board component and add it to the list of game boards
    const newGameBoard = <GameBoard key={this.state.activatePlayers.length+1} gamerName={playerName} isActive={false} activeNextPlayer={this.activeNextPlayer} removePlayer={this.removePlayer}/>;
    
    this.setState(prevState => ({
      activatePlayers: [...prevState.activatePlayers, newGameBoard]
    }));
  };

  removePlayer = () => {
    let index = this.state.currentGameBoardIndex;
    let nextIndex = (index+1) % this.state.activatePlayers.length;
    temp = [...this.state.activatePlayers]; // create a new copy of the activatePlayers array
    if (temp) { // check if the first element and its props object exist
      temp.splice(index,1); // modify the isActive prop of the first element
      if (nextIndex !== 0 ){
        temp[index] = React.cloneElement(temp[index], {isActive: true});
      } else if (temp.length !== 0){
          index = 0;
          temp[index] = React.cloneElement(temp[index], {isActive: true});
      } else{
        
      }
    }
    console.log('remove player: ',temp);
    this.setState({ 
      activatePlayers: temp,
      currentGameBoardIndex: index
    }, () => {
      console.log(this.state.activatePlayers);
    });
  }
  

  startGame = () => {
    this.activatePlayer(0);
  }

  render() {
    // const boards = this.state.activatePlayers;
    console.log('this is game render: ',this.state.activatePlayers);
    return (
      <div>
        <AddPlayerButton addPlayer={this.addPlayer} />
        <StartGameButton startGame={this.startGame} />
        <div className='game-container'>{this.state.activatePlayers}</div>
        {/* {this.state.activatePlayers} */}
      </div>
    );
  }
}


export default Game;
