import React from "react";

const buttons = [
  { id: 0, type: "עברית" },
  { id: 1, type: "English" },
  { id: 2, type: "emoji" },
];

class Language extends React.Component {
  render() {
    const buttonsComponent = buttons.map((btn) => (
      <button
        key={btn.id}
        className="options"
        onClick={() => this.props.onClick(btn.type)}
      >
        {btn.type}
      </button>
    ));
    return (
      <div>
        <h3>שפות:</h3>
        <div>{buttonsComponent}</div>
      </div>
    );
  }
}

export default Language;
