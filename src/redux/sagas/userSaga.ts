import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { userFailure, userSuccess } from '../actions/actions';
import { USER_REQUEST } from '../actions/actionsTypes';
import { IUser } from '../interfaces';

const getUsers = () =>
  axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

  function* fetchUserSaga() {
    try {
      const response = yield call(getUsers);
      yield put(
        userSuccess({
          users: response.data,
        })
      );
    } catch (e) {
      yield put(
        userFailure({
          error: e.message,
        })
      );
    }
  }

  function* userSaga() {
    yield all([takeLatest(USER_REQUEST, fetchUserSaga)]);
  }


  export default userSaga;