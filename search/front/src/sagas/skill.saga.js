import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { getSkills } from '../store/skill/skill.actions';
import { inputValue } from '../store/skill/skill.slice';

function* fetchSkillsSaga(action) {
  try {
    yield delay(300);
    const skills = yield call(() => getSkills(action.payload));
    console.log('Saga: fetchSkillsSaga received skills:', skills);
    yield put({ type: getSkills.fulfilled.type, payload: skills });
  } catch (error) {
    console.log('Saga: fetchSkillsSaga error:', error.message);
    yield put({ type: getSkills.rejected.type, payload: error.message });
  }
}

function* watchFetchSkills() {
  yield takeLatest(inputValue.type, fetchSkillsSaga);
}

export default function* rootSaga() {
  yield watchFetchSkills();
}
