import { combineReducers } from 'redux';
import filledTiles from './filledTilesReducer';
import gameSettings from './gameOfLifeSettingsReducer';

export default combineReducers({filledTiles, gameSettings});