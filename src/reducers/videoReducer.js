import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles video related actions.
// The idea is to return an updated copy of the state depending on the action type.

/*
    create-react-app comes preinstalled with babel-plugin-transform-object-rest-spread that lets you use the spread (…)
    operator to copy enumerable properties from one object to another in a succinct way.
 */
export default function (state = initialState.videos, action) {
    switch (action.type) {
        case types.MOCKABLE_VIDEOS_SUCCESS:
            return [...state, action.videos];
        case types.SELECTED_VIDEO:
            console.log("SELECTED_VIDEO reducer");
            return { ...state, selectedVideo: action.video };
        default:
            return state;
    }
}
