import React from "react";

const buttons = [
  { id: 0, type: "clear all" },
  { id: 1, type: "lower all" },
  { id: 2, type: "upper all" },
];

class Special extends React.Component {
  render() {
    const buttonsComponent = buttons.map((btn) => (
      <button onClick={() => this.props.onClick(btn.type)}>{btn.type}</button>
    ));
    return (
      <div>
        <h3>פעולות מיוחדות:</h3>
        <div>{buttonsComponent}</div>
      </div>
    );
  }
}

export default Special;
