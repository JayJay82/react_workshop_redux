import { createSelector } from 'reselect';

const getVideoList = (state) => state.videos.list;

export const getVideosState = createSelector(
    [ getVideoList ],
    (videos) => videos
)