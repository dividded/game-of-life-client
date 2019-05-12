import {SET_ALIVE_TILES_AROUND_LIFE_TO_KEEP_LIFE} from './actionTypes';

export default function(aliveTilesAroundLifeToKeepLife) {
    return ({
        type: SET_ALIVE_TILES_AROUND_LIFE_TO_KEEP_LIFE,
        aliveTilesAroundLifeToKeepLife
    });
}