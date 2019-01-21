import {VIDEOS_ACTION} from '../actions/videos.action';
const initialState = {
    list : []
}

export default function(state = initialState,action) {
    switch(action.type) {
        case VIDEOS_ACTION.FETCH_VIDEOS : {
            return { ...state, list : action.payload.data.items };
        }
        default:
          return state;
    }
}