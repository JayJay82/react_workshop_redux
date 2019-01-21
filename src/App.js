import React, { Component } from 'react';
import './App.css';
import SearchBar from './videos/components/searchbar.component';
import VideoList from './videos/components/videolist.component';
import VideoDetail from './videos/components/videodetail.component';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="App">
           <SearchBar />
           <VideoList />
           <VideoDetail />
        </div>
      </div>
    );
  }
}

export default App;
