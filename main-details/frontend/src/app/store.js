import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import serviceReducer from '../features/serviceSlice';
import rootSaga from '../sagas/serviceSaga.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'service/fetchToService/pending',
          'service/fetchToService/fulfilled',
          'service/fetchToService/rejected',
          'service/fetchServiceById/pending',
          'service/fetchServiceById/fulfilled',
          'service/fetchServiceById/rejected'
        ],
        ignoredActionPaths: ['meta.arg', 'payload'],
        ignoredPaths: ['serviceInfo.dates'],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
