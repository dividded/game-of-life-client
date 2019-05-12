import {GET_NEXT_GENERATION} from './actionTypes';

export default (aliveTiles, aroundDeadToCreateLife, aroundLifeToKeepLife) => {
    return ({
        type: GET_NEXT_GENERATION,
        parametersForNextGeneration: {aliveTiles, aroundDeadToCreateLife, aroundLifeToKeepLife}
    });
}
