import React from 'react';
import GameStatus from './GameStatus';
import './GameBoard.css';

const gameOperations= ['-1','+1','/2','*2'] ;
const endGameOperation = ['Start new game', 'exit'];

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      gamerName: props.gamerName,
      startNum: Math.floor(Math.random() * 100),
      stepCounter: 0,
      victoryCounter: [],
      operations: gameOperations
    }
    this.onOperationClik = this.onOperationClik.bind(this);
  }

  onOperationClik = (operation, startNum) => {
    if(operation === 'exit'){
      this.props.removePlayer(this.props.gamerName);
    }
    else if (operation === 'Start new game'){
      this.setState({startNum: Math.floor(Math.random() * 100), stepCounter: 0, operations: gameOperations });
      this.props.activeNextPlayer();
    }
    else{
      const updateNum = this.startNumUpdate(operation, startNum);
      const updateCounter = this.state.stepCounter + 1 ;
      this.setState({ startNum: updateNum});
      this.setState({ stepCounter: updateCounter });
      if(updateNum === 100){
        this.setState(prevState => ({
          victoryCounter: [...prevState.victoryCounter, updateCounter, ' '],
          operations: endGameOperation
        }));      
      }
      this.props.activeNextPlayer();
    }    
    
  }

  startNumUpdate = (operation, startNum) => {
    if (operation === '-1')
      return startNum-1;
    if (operation === '+1')
      return startNum+1;
    if (operation === '/2')
      return startNum/2;
    if (operation === '*2')
      return startNum*2;
  }

  render() {
    const visualOperations = this.state.operations.map(op=><button disabled={!this.props.isActive} onClick={() => this.onOperationClik(op, this.state.startNum)}>{op}</button> )
    return (      
      <div className='border'>
        <div style={{ display: 'inline-flex' }}>
          <h3>Gamer name: {this.state.gamerName}</h3>
          <GameStatus isActive={this.props.isActive} />
        </div>
        <h3>Current number: {this.state.startNum}</h3>
        <h3>Step number: {this.state.stepCounter}</h3>
        <h3>Victory counter: {this.state.victoryCounter}</h3>
        <h3>{visualOperations}</h3>
      </div>
    );
  }
}

export default GameBoard;