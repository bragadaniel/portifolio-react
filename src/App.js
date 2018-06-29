import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Root from './Root';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Root />
      </section>
    );
  }
}

export default App;
