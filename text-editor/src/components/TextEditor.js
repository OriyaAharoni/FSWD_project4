import React from "react";
import Language from "./Language";
import Size from "./Size";
import Color from "./Color";
import Space from "./Space";
import Special from "./Special";
import "../index.css";

const english = [
  ["p", "o", "i", "u", "y", "t", "r", "e", "w", "q"],
  ["l", "k", "j", "h", "g", "f", "d", "s", "a"],
  [".", "m", "n", "b", "v", "c", "x", "z"],
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
const capsLock = [
  ["P", "O", "I", "U", "Y", "T", "R", "E", "W", "Q"],
  ["L", "K", "J", "H", "G", "F", "D", "S", "A"],
  [".", "M", "N", "B", "V", "C", "X", "Z"],
];

let theText = [{ value: "", style: {} }];

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: english,
      allText: theText,
      input: "",
      color: "black",
      fontSize: 20,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
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
      case "caps lock":
        language = capsLock;
        break;
    }
    this.setState({ letters: language });
  }

  handleChangeInput(char) {
    let newElement = {
      value: char,
      style: { fontSize: this.state.fontSize, color: this.state.color },
    };
    theText.push(newElement);
    this.setState({ allText: theText });
  }

  handleChangeSize(size) {
    this.setState({ fontSize: size });
  }

  handleChangeColor(color) {
    let newColor;
    switch (color) {
      case "שחור":
        newColor = "black";
        break;
      case "ירוק":
        newColor = "green";
        break;
      case "אדום":
        newColor = "red";
        break;
      case "כחול":
        newColor = "blue";
        break;
    }
    this.setState({ color: newColor });
  }

  handleChangeText(type) {
    let newElement;
    switch (type) {
      case "delete":
        theText.pop();
        break;
      case "space":
        newElement = {
          value: " ",
          style: { fontSize: this.state.fontSize, color: this.state.color },
        };
        theText.push(newElement);
        break;
      case "caps lock":
        this.handleClick("caps lock");
        break;
      case "clear all":
        theText = theText.slice(0, 1);
        break;
      case "lower all":
        for (const obj of theText) {
          obj.value = obj.value.toLowerCase();
        }
        break;
      case "upper all":
        console.log(theText);
        for (const obj of theText) {
          obj.value = obj.value.toUpperCase();
        }
        console.log(theText);
        break;
    }
    this.setState({ allText: theText });
  }

  render() {
    const charComponent = this.state.letters.map((nested, index) => (
      <div key={index}>
        {nested.map((c, index) => (
          <button
            key={index}
            className="letters"
            onClick={() => this.handleChangeInput(c)}
          >
            {c}
          </button>
        ))}
      </div>
    ));

    return (
      <div>
        <div className="text">
          <br></br>
          {this.state.allText.map((l, index) => (
            <span key={index} className="char" style={l.style}>
              {l.value}
            </span>
          ))}
        </div>
        <div>{charComponent}</div>
        <Space onClick={this.handleChangeText} />
        <Language onClick={this.handleClick} />
        <Size onClick={this.handleChangeSize} />
        <Color onClick={this.handleChangeColor} />
        <Special onClick={this.handleChangeText} />
      </div>
    );
  }
}

export default TextEditor;
