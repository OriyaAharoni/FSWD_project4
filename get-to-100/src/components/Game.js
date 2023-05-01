import React, { Component } from 'react';
import GameBoard from './GameBoard.js';
import './Game.css';
import AddPlayerButton from './AddPlayerButton.js';
import StartGameButton from './StartGameButton.js';

let temp = [];
let playersTemp = [];
let topPlayersTemp = [];
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activatePlayers: temp,
      players: playersTemp,
      topPlayers : topPlayersTemp,
      currentGameBoardIndex: null,
      isGameStart: false
    };
  }

  

  activatePlayer = (index) => {
    temp = [...this.state.activatePlayers]; // create a new copy of the activatePlayers array
    if (this.state.activatePlayers[index] && this.state.activatePlayers[index].props) { // check if the first element and its props object exist
      temp[index] = React.cloneElement(temp[index], {isActive: true}); // modify the isActive prop of the first element
    }
    this.setState({ 
      activatePlayers: temp,
      currentGameBoardIndex: index
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
      currentGameBoardIndex: nextIndex
    }, () => {
      console.log(this.state.activatePlayers);
    });
  }

  addPlayer = (playerName) => {
    // Create a new game board component and add it to the list of game boards
    const newGameBoard = <GameBoard key={this.state.activatePlayers.length+1} gamerName={playerName} isActive={false} activeNextPlayer={this.activeNextPlayer} removePlayer={this.removePlayer} updateScore={this.updateScore}/>;
    const newPlayer = {gamerName: playerName, victoryCounter: [] };
    this.setState(prevState => ({
      activatePlayers: [...prevState.activatePlayers, newGameBoard],
      players: [...prevState.players, newPlayer]
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
    if (temp.length === 0){
      temp = [];
      playersTemp = [];
      topPlayersTemp = [];
      this.setState({
        isGameStart: false,
        activatePlayers: temp,
        currentGameBoardIndex: null,
        players: playersTemp,
        topPlayers : topPlayersTemp,
      });
      return;
    }
    this.setState({ 
      activatePlayers: temp,
      currentGameBoardIndex: index
    }, () => {
      console.log(this.state.activatePlayers);
    });
  }

  checkTopPlayers = (playersTemp) => {
    // 
    // Create a new array of players sorted by the smallest number of steps to win
    const sortedPlayers = playersTemp
    .filter((player) => player.victoryCounter.length > 0)
    .sort((a, b) => {
      const aSmallestSteps = Math.min(...a.victoryCounter);
      const bSmallestSteps = Math.min(...b.victoryCounter);
      return aSmallestSteps - bSmallestSteps;
    });

    // Get the names of the top 3 players
    const topPlayers = sortedPlayers.slice(0, 3).map((player) => player.gamerName);
    
    // Update the state with the new top players
    return topPlayers;
  }

  updateScore = (score, name) => {
    playersTemp = [...this.state.players];
    topPlayersTemp = [...this.state.topPlayers];
    const index = playersTemp.findIndex(x => x.gamerName == name);
    if (index != -1) {
      playersTemp[index].victoryCounter.push(score); // modify the isActive prop of the first element
      topPlayersTemp = this.checkTopPlayers(playersTemp);
    }
    this.setState({ 
      players: playersTemp,
      topPlayers: topPlayersTemp
    }, () => {
      console.log(this.state.players);
    });
  }  

  startGame = () => {
    this.activatePlayer(0);
    this.setState({isGameStart: true});
  }

  endGame = () => {
    temp = [];
    playersTemp = [];
    topPlayersTemp = [];
    this.setState({
      isGameStart: false,
      activatePlayers: temp,
      currentGameBoardIndex: null,
      players: playersTemp,
      topPlayers : topPlayersTemp,
    });
  }

  render() {
    console.log('this is game render: ',this.state.activatePlayers, this.state.isGameStart);
    return (
      <div className='game'>
        <AddPlayerButton isGameStart={this.state.isGameStart} addPlayer={this.addPlayer} />
        <StartGameButton isGameStart={this.state.isGameStart} startGame={this.startGame} />
        <div className={this.state.isGameStart?'isVisible':'isHidden'}>
          <h2>Top players:&nbsp;&nbsp;</h2>
          {this.state.topPlayers.map(p => <h2>{p}&nbsp;&nbsp;</h2>)}
        </div>
        <div className='game-container'>{this.state.activatePlayers}</div>
        {/* {this.state.activatePlayers} */}
        <button className={this.state.isGameStart?'isVisible button-game':'isHidden button-game'} onClick={this.endGame}>End game</button>
      </div>
    );
  }
}


export default Game;
