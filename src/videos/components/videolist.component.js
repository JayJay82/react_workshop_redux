import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoItem from './videoitem.component';
import { fetchVideos } from '../actions/videos.action';

class VideoList extends Component {
    componentDidMount() {
        this.props.fetchVideos("surfer");
    }
    renderItems = () => {
        if(this.props.videos) {
           return this.props.videos.map(item => {
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
        videos : videos.list
    }
}

export default connect(mapStateToProps,{fetchVideos})(VideoList);