import { takeLatest, put, spawn, retry, take } from 'redux-saga/effects';
import { searchError, searchRequest, searchSuccess } from '../store/skill/skill.slice';

async function searchItems(search) {
  const url = new URL('http://localhost:7070/api/search');
  url.searchParams.append('q', search);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

function* fetchSkillsSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(retryCount, retryDelay, searchItems, action.payload);
    yield put(searchSuccess(data));
  } catch (error) {
    yield put(searchError(error.message));
  }
}

function* watchChangeSearchSaga() {
  while (true) {
    const action = yield take('skills/inputValue');
    yield put(searchRequest(action.payload));
  }
}

function* watchSearchRequestSaga() {
  yield takeLatest('skills/searchRequest', fetchSkillsSaga);
}

export default function* rootSaga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchRequestSaga);
}