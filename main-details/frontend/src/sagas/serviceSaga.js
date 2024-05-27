import { takeLatest, put, call, delay, all } from 'redux-saga/effects';
import { fetchToService, serviceById } from '../features/serviceSlice';

// Fetch all services
function* fetchServicesSaga() {
  try {
    yield delay(300); // Add delay to debounce the API call
    const response = yield call(fetchToService);
    yield put({ type: fetchToService.fulfilled.type, payload: response });
  } catch (error) {
    yield put({ type: fetchToService.rejected.type, payload: error.message });
  }
}

// Fetch a specific service by ID
function* fetchServiceByIdSaga(action) {
  try {
    const response = yield call(serviceById, action.payload);
    yield put({ type: serviceById.fulfilled.type, payload: response });
  } catch (error) {
    yield put({ type: serviceById.rejected.type, payload: error.message });
  }
}

function* watchFetchServices() {
  yield takeLatest(fetchToService.pending.type, fetchServicesSaga);
}

function* watchFetchServiceById() {
  yield takeLatest(serviceById.pending.type, fetchServiceByIdSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchServices(),
    watchFetchServiceById(),
  ]);
}