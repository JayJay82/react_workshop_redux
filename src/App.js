import React, { Component } from 'react';
import './App.css';
import Routes from './routes/routes';


class App extends Component {
  render() { 
    return (
      <div>
      <header>fixed</header>
        <div className="container">
            <Routes />
        </div>   
        <footer>fixed</footer>
      </div>
    );
  }
}

export default App;
