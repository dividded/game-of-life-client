import {NEXT_GENERATION} from './actionTypes';

export default function(aroundDeadToCreateLife, aroundLifeToKeepLife) {
    return ({
        type: NEXT_GENERATION,
        aroundDeadToCreateLife,
        aroundLifeToKeepLife
    });
}


