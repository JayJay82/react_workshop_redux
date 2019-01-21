import { combineReducers } from 'redux';
import videosReducer from './videos/reducers/videos.reducer';
export default combineReducers({
   videos : videosReducer
});