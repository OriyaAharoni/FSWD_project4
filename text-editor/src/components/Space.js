import React from "react";

const buttons = [
  { id: 0, type: "delete" },
  { id: 1, type: "space" },
  { id: 2, type: "enter" },
];

class Space extends React.Component {
  render() {
    const buttonsComponent = buttons.map((btn) => (
      <button onClick={() => this.props.onClick(btn.type)}>{btn.type}</button>
    ));
    return <div>{buttonsComponent}</div>;
  }
}

export default Space;
