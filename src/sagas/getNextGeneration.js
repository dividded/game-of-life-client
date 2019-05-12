import { takeEvery, put } from "redux-saga/effects";
import { GET_NEXT_GENERATION, SET_ALIVE_TILES } from "../actions/gameFlow/actionTypes";
import fetchNextGeneration from '../network/fetchNextGeneration';

export default function* watchForNextGenerationGet(){ 
    yield takeEvery(GET_NEXT_GENERATION, getNextGeneration);
}

function* getNextGeneration({parametersForNextGeneration}) {
    const nextGenerationOfAliveTiles = yield fetchNextGeneration(parametersForNextGeneration);
    
    yield put({type: SET_ALIVE_TILES, aliveTiles: nextGenerationOfAliveTiles});
}