import React, {Component} from 'react';
import VideoItem from './videoitem.component';

class VideoList extends Component {
    render() {
        return (
            <div>
                <h1>VideoList</h1>
                <VideoItem />
            </div>
            )
    }
}

export default VideoList;