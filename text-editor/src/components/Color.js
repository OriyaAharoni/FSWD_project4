import React from "react";

const colors = ["כחול", "אדום", "ירוק", "שחור"];

class Color extends React.Component {
  render() {
    const colorsComponent = colors.map((c) => <button>{c}</button>);
    return (
      <div>
        <h3>צבע:</h3>
        <div>{colorsComponent}</div>
      </div>
    );
  }
}

export default Color;
