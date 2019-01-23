import React, {Component} from 'react';
import SearchBar from './components/searchbar.component';
import VideoList from './components/videolist.component';
import VideoDetail from './components/videodetail.component';

class Videos extends Component {
    render() {
        return(
            <div>
                <SearchBar />
                <div className="row">
                    <VideoList />
                    <VideoDetail />
                </div>
            </div>
        )
    }
}

export default Videos;