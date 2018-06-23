import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
