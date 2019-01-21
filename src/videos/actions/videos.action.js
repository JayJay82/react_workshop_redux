import axios from 'axios';
const search_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ&part=snippet&order=relevance&maxResults=10&q=";

export const VIDEOS_ACTION = {
   FETCH_VIDEOS : "FETCH_VIDEOS",
   SELECTED_VIDEO : "SELECTED_VIDEO"
}

export function fetchVideos(term) {
    const url = search_url + term;
    const request = axios.get(url);
    return {
        type : VIDEOS_ACTION.FETCH_VIDEOS,
        payload : request
    };
}

export function selectVideo(id) {
    return {
        type : VIDEOS_ACTION.SELECTED_VIDEO,
        payload : id
    }
}