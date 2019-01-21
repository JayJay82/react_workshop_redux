import React, {Component} from 'react';
import VideoItem from './videoitem.component';

class VideoList extends Component {
    render() {
        return (
                <ul className="col-md-4 list-group">
                  <VideoItem />
                </ul>
            )
    }
}

export default VideoList;