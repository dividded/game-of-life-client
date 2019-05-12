import {SET_START_OFFSET} from './actionTypes';

export default function(startOffset) {
    return ({
        type: SET_START_OFFSET,
        startOffset
    });
}