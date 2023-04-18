import React from "react";

const sizes = [12, 18, 24, 30];

class Size extends React.Component {
  render() {
    const sizesComponent = sizes.map((s) => (
      <button
        key={s.toString()}
        className="options"
        onClick={() => this.props.onClick(s)}
      >
        {s}
      </button>
    ));
    return (
      <div>
        <h3>גודל:</h3>
        <div>{sizesComponent}</div>
      </div>
    );
  }
}

export default Size;
