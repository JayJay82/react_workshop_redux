import React, { Component } from 'react';
import './App.css';
import SearchBar from './videos/components/searchbar.component';
import VideoList from './videos/components/videolist.component';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="App">
           <SearchBar />
           <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
