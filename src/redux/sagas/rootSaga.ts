import { all, fork } from "redux-saga/effects";

import postsSaga from "./postsSaga";
import userSaga from "./userSaga";
import commentsSaga from "./commentsSaga";

export default function* rootSaga() {
	yield all([fork(postsSaga), fork(userSaga), fork(commentsSaga)]);
}
