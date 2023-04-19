import React from 'react';
import GameStatus from './GameStatus';
import './GameBoard.css';

const operations= ['-1','+1','/2','*2'] ;

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      gamerName: props.gamerName,
      startNum: Math.floor(Math.random() * 100),
      stepCounter: 0,
      gameOperations: operations
    }
    this.onOperationClik = this.onOperationClik.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  onOperationClik = (operation, startNum) => {
    this.setState({ startNum: this.startNumUpdate(operation, startNum)});
    this.setState({ stepCounter: this.state.stepCounter + 1 });
    this.props.activeNextPlayer();
  }

  handleStatusChange(isActive) {
    this.setState({ isActive });
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
    return startNum;
  }

  render() {
    const operations = this.state.gameOperations.map(op=><button disabled={!this.props.isActive} onClick={() => this.onOperationClik(op, this.state.startNum)}>{op}</button> )
    return (      
      <div>
        <div style={{ display: 'inline-flex' }}>
          <h3>Gamer name: {this.state.gamerName}</h3>
          <GameStatus isActive={this.props.isActive} />
        </div>
        <h3>Current number: {this.state.startNum}</h3>
        <h3>Step number: {this.state.stepCounter}</h3>
        <h3>{operations}</h3>
      </div>
    );
  }
}

export default GameBoard;