import { put, call, takeLeading, all, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { FetchingStatus, Id } from "../../types/common";
import { getUser, setUser, setUserError, setUserStatus } from "../actions";
import userService from "../../services/user.service";
import { User } from "../../types/user";

function* onLoadUser({ payload }: PayloadAction<Id>) {
	try {
		yield put(setUserStatus(FetchingStatus.PENDING));
		yield put(setUserError(null));

		const user: User = yield call(userService.getById, payload);

		yield put(setUserStatus(FetchingStatus.SUCCESS));
		yield put(setUser(user));
	} catch (error) {
		console.error(error);

		yield put(setUserStatus(FetchingStatus.FAILURE));
		yield put(
			setUserError("Что-то пошло не так. Повторите попытку чуть позже...")
		);
	}
}

function* watchOnLoadUser() {
	yield takeLeading(getUser, onLoadUser);
}

export default function* userSaga() {
	yield all([fork(watchOnLoadUser)]);
}
