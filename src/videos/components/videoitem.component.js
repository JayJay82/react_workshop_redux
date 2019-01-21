import React, {Component} from 'react';

class VideoItem extends Component {
   
    render() {
      if(this.props.item) {
        const {item} = this.props;
        const imageUrl = item.snippet.thumbnails.default.url;
        console.log(imageUrl);
        return (
            <li  key={item.etag} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt="test" src={imageUrl} />
                </div>
                <div className="media-body ml-2">
                    <div className="media-heading">{item.snippet.title}</div>
                </div>
                </div>
            </li> 
        ) 
      } else return null;
    }
}

export default VideoItem;