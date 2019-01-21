import {VIDEOS_ACTION} from '../actions/videos.action';
const initialState = {
    videos : []
}

export default function(state = initialState,action) {
    switch(action.type) {
        case VIDEOS_ACTION.FETCH_VIDEOS : {
            return {};
        }
        default:
          return state;
    }
}