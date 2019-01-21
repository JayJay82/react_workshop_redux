import React, { Component } from 'react';
import './App.css';
import SearchBar from './videos/components/searchbar.component';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="App">
           <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
