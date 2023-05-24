import { all, fork } from "redux-saga/effects";

import postsSaga from "./postsSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
	yield all([fork(postsSaga), fork(userSaga)]);
}
