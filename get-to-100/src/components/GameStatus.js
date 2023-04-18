import React, { Component } from 'react';
import './GameStatus.css';

class GameStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive,
      isFlashing: props.isActive
    };

    this.toggleFlashing = this.toggleFlashing.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.setState({ isActive: this.props.isActive });
      this.toggleFlashing();
    }
  }

  toggleFlashing() {
    if (this.state.isActive) {
      this.setState(prevState => ({ isFlashing: !prevState.isFlashing }));
      setTimeout(this.toggleFlashing, 500);
    } else {
      this.setState({ isFlashing: false });
    }
  }

  render() {
    const { isFlashing, isActive } = this.state;

    return (
      <div className={`game-status ${isActive ? 'active' : 'inactive'}`}>
        <div className={`circle ${isFlashing ? 'flashing' : ''}`} />
      </div>
    );
  }
}

export default GameStatus;
