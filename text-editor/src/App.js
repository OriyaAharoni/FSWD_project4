import logo from './logo.svg';
import './App.css';
import KeyBoard from './components/KeyBoard';
import TextEditor from './components/TextEditor';
import Charcomp from './components/Char';
import Language from './components/Language';

function App() {
  return (
    <div className="App">
      <Charcomp />
      <Language />
      <KeyBoard />
      <TextEditor/>
      <header className="App-header">
        <h1>hi</h1>
        
        <h1>hi</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
