import React, { Component } from 'react';
import logo from './suckerberg.png';
import './App.css';

class Text extends Component {
  render() {
    return (
      <div style={{color: this.props.color}}>{this.props.value}</div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Text color="#61dafb" id="sucker" value="Mark Zuckerberg Suckerbergs"></Text>
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