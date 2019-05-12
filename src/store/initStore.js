import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
    sagaMiddleWare.run(rootSaga);
    
    return store;
}

