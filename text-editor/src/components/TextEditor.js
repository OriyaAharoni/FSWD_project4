import React from "react";
import Language from "./Language";
import Size from "./Size";
import Color from "./Color";
import Space from "./Space";
import Special from "./Special";

const english = [
  ["p", "o", "i", "u", "y", "t", "r", "e", "w", "q"],
  ["l", "k", "j", "h", "g", "f", "d", "s", "a"],
  ["m", "n", "b", "v", "c", "x", "z"],
];
const hebrew = [
  ["פ", "ם", "ן", "ו", "ט", "א", "ר", "ק", "'", "/"],
  ["ך", "ל", "ח", "י", "ע", "כ", "ג", "ד", "ש"],
  ["ת", "צ", "מ", "נ", "ה", "ב", "ס", "ז"],
];
const emoji = [
  ["😀", "😂", "😊", "🤔", "😎", "🤩", "😜", "🤯", "🤫", "🤢"],
  ["🤖", "👽", "👻", "🤡", "💩", "🙈", "🙉", "🙊", "🦄"],
  ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐨", "🐼"],
];

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: english,
      input: "",
      color: "red",
      fontSize: 20,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    //this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleClick(type) {
    let language;
    switch (type) {
      case "עברית":
        language = hebrew;
        break;
      case "English":
        language = english;
        break;
      case "emoji":
        language = emoji;
        break;
    }
    this.setState({ letters: language });
  }

  handleChangeInput(char) {
    this.setState({ input: this.state.input + char });
  }

  handleChangeSize(size) {
    this.setState({ fontSize: size });
    // var text = document.getElementById("input");
    // text.style.fontSize = "50px";
  }

  handleChangeText(type) {
    let text;
    switch (type) {
      case "delete":
        text = this.state.input.substring(0, this.state.input.length - 1);
        break;
      case "space":
        text = this.state.input + " ";
        break;
      case "enter":
        text = this.state.input + "\n";
        break;
      case "clear all":
        text = " ";
        break;
      case "lower all":
        text = this.state.input.toLowerCase();
        break;
      case "upper all":
        text = this.state.input.toUpperCase();
        break;
    }
    this.setState({ input: text });
  }

  // handleTextChange(event) {
  //   this.setState({ input: event.target.value });
  // }

  render() {
    const charComponent = this.state.letters.map((nested) => (
      <div>
        {nested.map((c) => (
          <button onClick={() => this.handleChangeInput(c)}>{c}</button>
        ))}
      </div>
    ));

    return (
      <div>
        <textarea
          id="input"
          value={this.state.input}
          style={{ color: this.state.color, fontSize: this.state.fontSize }}
          //onChange={this.handleTextChange}
        />
        <div>{charComponent}</div>
        <Space onClick={this.handleChangeText} />
        <Language onClick={this.handleClick} />
        <Size onClick={this.handleChangeSize} />
        <Color />
        <Special onClick={this.handleChangeText} />
      </div>
    );
  }
}

export default TextEditor;
