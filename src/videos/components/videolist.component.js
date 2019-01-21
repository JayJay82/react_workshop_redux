import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoItem from './videoitem.component';
import { fetchVideos } from '../actions/videos.action';

class VideoList extends Component {
    componentDidMount() {
        this.props.fetchVideos("surfers");
    }
    renderItems = () => {
        if(this.props.videos.list) {
           return this.props.videos.list.map(item => {
               return <VideoItem item = {item} key={item.etag} />
           })
        }
    }
    render() {
        return (
                <ul className="col-md-4 list-group">
                    {this.renderItems()}
                  <VideoItem />
                </ul>
            )
    }
}

function mapStateToProps({videos}) {
    return {
        videos
    }
}

export default connect(mapStateToProps,{fetchVideos})(VideoList);