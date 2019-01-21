import {VIDEOS_ACTION} from '../actions/videos.action';

const initialState = {
    list : [],
    selected : null
}

export default function(state = initialState,action) {
    switch(action.type) {
        case VIDEOS_ACTION.FETCH_VIDEOS : {
            return { ...state, list : action.payload.data.items ,selected :action.payload.data.items[0] };
        }
        case VIDEOS_ACTION.SELECTED_VIDEO : {
              const {list} = state;
              const item = list.filter(item => item.etag === action.payload);
              return {...state , selected : item[0] };
        }
        default:
          return state;
    }
}

