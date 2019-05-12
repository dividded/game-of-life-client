import {SET_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE} from './actionTypes';

export default function(aliveTilesAroundDeadToCreateLife) {
    return ({
        type: SET_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE,
        aliveTilesAroundDeadToCreateLife
    });
}