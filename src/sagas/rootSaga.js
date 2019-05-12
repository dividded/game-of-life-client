import {all} from 'redux-saga/effects';
import getNextGeneration from './getNextGeneration';

export default function* rootSaga() {
    yield all([getNextGeneration()]);
}