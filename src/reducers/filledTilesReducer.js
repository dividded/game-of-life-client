import {SWITCH_TILE, SET_ALIVE_TILES, CLEAR } from '../actions/gameFlow/actionTypes';
import {isTileInArray} from '../reducers/helperTileFunctions';

const filledTilesReducer = (state = [], action) => {
    switch(action.type) {
        case SWITCH_TILE:
           return switchTile(state, action.tile);
        case SET_ALIVE_TILES:
            return [...action.aliveTiles];
        case CLEAR:
            return [];
        default:
            return state;
    }
}

const switchTile = (filledTiles, tileToSwitch) => {
    if(isTileInArray(filledTiles, tileToSwitch)) {
        return filledTiles.filter(tile => 
                            !(tile.row === tileToSwitch.row && tile.col === tileToSwitch.col)); 
    }
    
    return [tileToSwitch, ...filledTiles];
}

export default filledTilesReducer;