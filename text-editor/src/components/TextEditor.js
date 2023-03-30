// import React, { Component } from 'react';

// class TextEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//       language: 'en',
//       font: 'Arial',
//       size: '16px',
//       color: '#000000',
//       case: 'normal',
//     };
//     this.handleLanguageChange = this.handleLanguageChange.bind(this);
//     this.handleFontChange = this.handleFontChange.bind(this);
//     this.handleSizeChange = this.handleSizeChange.bind(this);
//     this.handleColorChange = this.handleColorChange.bind(this);
//     this.handleCaseChange = this.handleCaseChange.bind(this);
//     this.handleTextChange = this.handleTextChange.bind(this);
//     this.handleClearText = this.handleClearText.bind(this);
//     this.handleUndo = this.handleUndo.bind(this);
//     this.handleDeleteLastCharacter = this.handleDeleteLastCharacter.bind(this);
//   }

//   handleLanguageChange(event) {
//     this.setState({ language: event.target.value });
//   }

//   handleFontChange(event) {
//     this.setState({ font: event.target.value });
//   }

//   handleSizeChange(event) {
//     this.setState({ size: event.target.value });
//   }

//   handleColorChange(event) {
//     this.setState({ color: event.target.value });
//   }

//   handleCaseChange(event) {
//     this.setState({ case: event.target.value });
//   }

//   handleTextChange(event) {
//     this.setState({ text: event.target.value });
//   }

//   handleClearText() {
//     this.setState({ text: '' });
//   }

//   handleUndo() {
//     // logic for undoing recent actions
//   }

//   handleDeleteLastCharacter() {
//     // logic for deleting the last character
//   }

//   render() {
//     const { text, language, font, size, color, case1 } = this.state;

//     return (
//       <div>
//         <h1>Visual Text Editor</h1>
//         <div>
//           <label htmlFor="language">Language: </label>
//           <select id="language" value={language} onChange={this.handleLanguageChange}>
//             <option value="en">English</option>
//             <option value="he">Hebrew</option>
//             <option value="emoji">Emojis</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="font">Font: </label>
//           <select id="font" value={font} onChange={this.handleFontChange}>
//             <option value="Arial">Arial</option>
//             <option value="Times New Roman">Times New Roman</option>
//             <option value="Verdana">Verdana</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="size">Size: </label>
//           <select id="size" value={size} onChange={this.handleSizeChange}>
//             <option value="12px">12</option>
//             <option value="16px">16</option>
//             <option value="20px">20</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="color">Color: </label>
//           <input type="color" id="color" value={color} onChange={this.handleColorChange} />
//         </div>
//         <div>
//           <label htmlFor="case">Case: </label>
//           <select id="case" value={case1} onChange={this.handleCaseChange}>
//             <option value="normal">Normal</option>
//             <option value="uppercase">Uppercase</option>
//             <option value="lowercase">Lowercase</option>
//           </select>
//           </div>
//           </div>);
//   }
// }

import React, { Component } from 'react';
//import './App.css';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      font: "Arial",
      fontSize: "12pt",
      color: "#000000",
      uppercase: false,
      language: "English"
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleFontChange = this.handleFontChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleUppercaseChange = this.handleUppercaseChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleSpecialAction = this.handleSpecialAction.bind(this);
  }

  handleTextInput(event) {
    this.setState({ text: event.target.value });
  }

  handleFontChange(event) {
    this.setState({ font: event.target.value });
  }

  handleFontSizeChange(event) {
    this.setState({ fontSize: event.target.value });
  }

  handleColorChange(event) {
    this.setState({ color: event.target.value });
  }

  handleUppercaseChange(event) {
    this.setState({ uppercase: event.target.checked });
  }

  handleLanguageChange(event) {
    this.setState({ language: event.target.value });
  }

  handleGeneralChange() {
    // logic for applying general changes to text
  }

  handleSpecialAction(action) {
    // logic for performing special actions (delete, clear, undo, etc.)
  }

  render() {
    return (
      <div>
        <h1>Visual Text Editor</h1>
        <div>
          <label htmlFor="textInput">Text Input:</label>
          <textarea id="textInput" value={this.state.text} onChange={this.handleTextInput}></textarea>
        </div>
        <div>
          <label htmlFor="fontSelect">Font:</label>
          <select id="fontSelect" value={this.state.font} onChange={this.handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>
        <div>
          <label htmlFor="fontSizeSelect">Font Size:</label>
          <select id="fontSizeSelect" value={this.state.fontSize} onChange={this.handleFontSizeChange}>
            <option value="10pt">10pt</option>
            <option value="12pt">12pt</option>
            <option value="14pt">14pt</option>
          </select>
        </div>
        <div>
          <label htmlFor="colorInput">Color:</label>
          <input type="color" id="colorInput" value={this.state.color} onChange={this.handleColorChange} />
        </div>
        <div>
          <label htmlFor="uppercaseCheckbox">Uppercase:</label>
          <input type="checkbox" id="uppercaseCheckbox" checked={this.state.uppercase} onChange={this.handleUppercaseChange} />
        </div>
        <div>
          <label htmlFor="languageSelect">Language:</label>
          <select id="languageSelect" value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Emoji">Emoji</option>
            </select>
        </div>
        </div>
        );
        }
    }

export default TextEditor