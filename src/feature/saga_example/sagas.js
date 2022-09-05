import {call,put,takeEvery, all} from 'redux-saga/effects';
import { getCatsSuccess } from './postSlice';

function * workGetCatsFetch(){
    const cats=yield call(()=>fetch('https://jsonplaceholder.typicode.com/posts'));
    const formattedCats=yield cats.json();
    yield put(getCatsSuccess(formattedCats.slice(0, 10)));
}

function* catSaga(){
    yield takeEvery('posts/getCatsFetch',workGetCatsFetch)
}
export default function* rootSaga() {
    yield all([
      catSaga()
    ])
  }