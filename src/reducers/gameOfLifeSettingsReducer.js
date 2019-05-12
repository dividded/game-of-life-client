import {SET_START_OFFSET, 
        SET_BOARD_SIZE, 
        SET_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE, 
        SET_ALIVE_TILES_AROUND_LIFE_TO_KEEP_LIFE} from '../actions/settings/actionTypes';

const defaultSettings = {
    startOffset: 0,
    boardSize: 50,
    aliveTilesAroundDeadToCreateLife: 3,
    aliveTilesAroundLifeToKeepLife: 2
};

const gameOfLifeSettingsReducer = (state = defaultSettings, action) => {
    switch(action.type) {
        case SET_START_OFFSET:
            return {...state, startOffset: action.startOffset};
        case SET_BOARD_SIZE:
            return {...state, boardSize: action.boardSize};
        case SET_ALIVE_TILES_AROUND_DEAD_TO_CREATE_LIFE:
            return {...state, aliveTilesAroundDeadToCreateLife: action.aliveTilesAroundDeadToCreateLife};
        case SET_ALIVE_TILES_AROUND_LIFE_TO_KEEP_LIFE:
            return {...state, aliveTilesAroundLifeToKeepLife: action.aliveTilesAroundLifeToKeepLife};
        default:
            return state;
    }
}

export default gameOfLifeSettingsReducer;