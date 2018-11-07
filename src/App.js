import React, { Component } from 'react';
import logo from './suckerberg3.png';
import './App.css';

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{color: this.props.color}}>{this.props.value}</div>;
  }
};

// render() is a "lifecycle method"
  // react library controls it, you just write the instructions for how the components behave/look
  // react creates the tags and puts them into the DOM for us

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p id="sucker"><Text color="#61dafb" value="Mark Zuckerberg Suckerbergs"></Text></p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Text color="#61dafb" value="Jenny Hoelzer"></Text>
        </header>
      </div>
    );
  }
}

export default App;