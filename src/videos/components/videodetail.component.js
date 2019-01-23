import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getSelectedItem } from '../selectors/videos.selector';
class VideoDetail extends Component {
    renderContents = () => {
        if(this.props.videoSelected) {
            const videoId = this.props.videoSelected.id.videoId;
            const url = 'https://www.youtube.com/embed/'+ videoId;
            return (
                    <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="youtubevideo" className="embed-responsive-item" src={url}></iframe>
                    </div>
                      <div className="details">
                          <div>{this.props.videoSelected.snippet.title}</div>
                          <div>{this.props.videoSelected.snippet.description}</div>
                      </div>
                </div>
            )} else { return (<div />)}
    }
    render(){
        return( 
          this.renderContents()
        )
     }
}

function mapStateToProps(state) {
    return {
        videoSelected : getSelectedItem(state)
    }
}
export default connect(mapStateToProps,null)(VideoDetail);