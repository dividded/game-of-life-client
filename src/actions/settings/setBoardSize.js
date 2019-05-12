import {SET_BOARD_SIZE} from './actionTypes';

export default function(boardSize) {
    return ({
        type: SET_BOARD_SIZE,
        boardSize
    });
}