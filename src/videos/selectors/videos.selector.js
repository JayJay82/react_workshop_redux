import { createSelector } from 'reselect';

const getVideoList = (state) => state.videos.list;
const getSelected = (state) => state.videos.selected;

export const getVideosState = createSelector(
    [ getVideoList ],
    (videos) => videos
)

export const getSelectedItem = createSelector(
    [getSelected],
    (selected) => selected
)