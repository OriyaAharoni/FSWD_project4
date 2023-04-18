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

  activeNextPlayer = () => {
    temp = [...this.state.gameBoards]; 
    const currentGameBoardIndex = this.state.currentGameBoardIndex;
    if (this.state.gameBoards[currentGameBoardIndex] && this.state.gameBoards[currentGameBoardIndex].props) { 
      temp[currentGameBoardIndex] = React.cloneElement(temp[currentGameBoardIndex], {isActive: false}); 
    }
    const nextIndex = (currentGameBoardIndex+1) % this.state.gameBoards.length;
    if (this.state.gameBoards[nextIndex] && this.state.gameBoards[nextIndex].props) { 
      temp[nextIndex] = React.cloneElement(temp[nextIndex], {isActive: true}); 
    }
    console.log(temp);
    this.setState({ gameBoards: temp }); // update the state with the new gameBoards array
    console.log(this.state.gameBoards);
    this.setState({ currentGameBoardIndex: nextIndex });
  }

  addPlayer = (playerName) => {
    // Create a new game board component and add it to the list of game boards
    const newGameBoard = <GameBoard key={this.state.gameBoards.length+1} gamerName={playerName} isActive={false} activeNextPlayer={this.activeNextPlayer}/>;
    temp.push(newGameBoard);
    this.setState({ gameBoards: temp }, () => {
      console.log(this.state.gameBoards); // log the updated gameBoards array
    });      
  }

  startGame = () => {
    temp = [...this.state.gameBoards]; // create a new copy of the gameBoards array
    if (this.state.gameBoards[0] && this.state.gameBoards[0].props) { // check if the first element and its props object exist
      temp[0] = React.cloneElement(temp[0], {isActive: true}); // modify the isActive prop of the first element
    }
    console.log(temp);
    this.setState({ gameBoards: temp }); // update the state with the new gameBoards array
    console.log(this.state.gameBoards);
    this.setState({ currentGameBoardIndex: 0 }); // set the currentGameBoard state to the first board in the new array
  }

  render() {
    const boards = this.state.gameBoards;
    return (
      <div>
        <AddPlayerButton addPlayer={this.addPlayer} />
        <StartGameButton startGame={this.startGame} />
        {boards}
      </div>
    );
  }
}


export default Game;
