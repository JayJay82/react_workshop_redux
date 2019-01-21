import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchVideos } from '../actions/videos.action';
import _ from 'lodash';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }
    onInputChange = (event) => {
        this.setState({term : event.target.value});
        this.fetchDebounce(event.target.value);
    }
    fetchDebounce = _.debounce((term) => {this.props.fetchVideos(term);},300);
    render() {
        return (   
            <div className="search-bar">
             <input
                value = { this.state.term }
                onChange= { this.onInputChange } />
            </div>
        )
    }
}

export default connect(null,{fetchVideos})(SearchBar);