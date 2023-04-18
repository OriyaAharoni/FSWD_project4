import React from "react";

const colors = [
  { id: 0, type: "כחול" },
  { id: 1, type: "אדום" },
  { id: 2, type: "ירוק" },
  { id: 3, type: "שחור" },
];

class Color extends React.Component {
  render() {
    const colorsComponent = colors.map((c) => (
      <button
        key={c.id}
        className="options"
        onClick={() => this.props.onClick(c.type)}
      >
        {c.type}
      </button>
    ));
    return (
      <div>
        <h3>צבע:</h3>
        <div>{colorsComponent}</div>
      </div>
    );
  }
}

export default Color;
