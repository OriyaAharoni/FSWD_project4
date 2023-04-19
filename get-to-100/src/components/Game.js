import React, { Component } from 'react';
import GameBoard from './GameBoard.js';
import './Game.css';
import AddPlayerButton from './AddPlayerButton.js';
import StartGameButton from './StartGameButton.js';

let temp = [];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoards: temp,
      currentGameBoardIndex: null
    };
  }

  activatePlayer = (index) => {
    temp = [...this.state.gameBoards]; // create a new copy of the gameBoards array
    if (this.state.gameBoards[index] && this.state.gameBoards[index].props) { // check if the first element and its props object exist
      temp[index] = React.cloneElement(temp[index], {isActive: true}); // modify the isActive prop of the first element
    }
    console.log(temp);
    this.setState({ gameBoards: temp }, () => {
      console.log('this is activate player faunction: ',this.state.gameBoards);
    });
    this.setState({currentGameBoardIndex: index})
  }

  inactivatePlayer = (index) => {
    temp = [...this.state.gameBoards]; // create a new copy of the gameBoards array
    if (this.state.gameBoards[index] && this.state.gameBoards[index].props) { // check if the first element and its props object exist
      temp[index] = React.cloneElement(temp[index], {isActive: false}); // modify the isActive prop of the first element
    }
    console.log(temp);
    this.setState({ gameBoards: temp }, () => {
      console.log(this.state.gameBoards);
    });
  }

  activeNextPlayer = () => {
    this.inactivatePlayer(this.state.currentGameBoardIndex);
    this.activatePlayer(this.state.currentGameBoardIndex+1);
    // this.setState({ currentGameBoardIndex: this.state.currentGameBoardIndex+1 });
  }

  // addPlayer = (playerName) => {
  //   // Create a new game board component and add it to the list of game boards
  //   const newGameBoard = <GameBoard key={this.state.gameBoards.length+1} gamerName={playerName} isActive={false} activeNextPlayer={this.activeNextPlayer}/>;
  //   this.state.gameBoards.push(newGameBoard);
  //   this.setState();  
  // }

  addPlayer = (playerName) => {
    // Create a new game board component and add it to the list of game boards
    const newGameBoard = <GameBoard key={this.state.gameBoards.length+1} gamerName={playerName} isActive={false} activeNextPlayer={this.activeNextPlayer}/>;
    
    this.setState(prevState => ({
      gameBoards: [...prevState.gameBoards, newGameBoard]
    }));
  };
  

  startGame = () => {
    this.activatePlayer(0);
  }

  render() {
    // const boards = this.state.gameBoards;
    console.log('this is game render: ',this.state.gameBoards);
    return (
      <div>
        <AddPlayerButton addPlayer={this.addPlayer} />
        <StartGameButton startGame={this.startGame} />
        <div>{this.state.gameBoards}</div>
        {/* {this.state.gameBoards} */}
      </div>
    );
  }
}


export default Game;
