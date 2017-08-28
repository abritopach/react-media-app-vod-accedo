import { combineReducers } from 'redux';
import videos from './videoReducer';

// Combines all reducers to a single reducer function.
// We import combineReducers from Redux. CombineReducers is a helper function that combines our videos reducers into a
// single reducer function that we can now pass to the creatorStore function.
const rootReducer = combineReducers({
    videos
});

export default rootReducer;
