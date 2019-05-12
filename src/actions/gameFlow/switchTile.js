import {SWITCH_TILE} from './actionTypes';

export default function(tile) {
    return ({
        type: SWITCH_TILE,
        tile
    });
}