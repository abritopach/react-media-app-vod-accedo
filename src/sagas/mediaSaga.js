import { put, call } from 'redux-saga/effects';
import { mockableVideos } from '../api/api';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchMediaSaga({ payload }) {
    try {
        const videos = yield call(mockableVideos, payload);
        yield [
            put({ type: types.MOCKABLE_VIDEOS_SUCCESS, videos }),
            put({ type: types.SELECTED_VIDEO, video: videos[0] }),
        ];
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}