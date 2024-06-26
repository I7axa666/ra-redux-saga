import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import skillReducer from './skill/skill.slice';
import rootSaga from '../sagas/skill.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  skills: skillReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
