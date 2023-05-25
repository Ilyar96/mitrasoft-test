import { put, call, takeLeading, all, fork } from "redux-saga/effects";

import { FetchingStatus } from "../../types/common";
import {
	getComments,
	setComments,
	setCommentsError,
	setCommentsStatus,
} from "../actions";
import { Comment } from "../../types/comment";
import commentService from "../../services/comment.service";

function* onLoadComments() {
	try {
		yield put(setCommentsStatus(FetchingStatus.PENDING));
		yield put(setCommentsError(null));

		const comments: Comment[] = yield call(commentService.get);

		yield put(setCommentsStatus(FetchingStatus.SUCCESS));
		yield put(setComments(comments));
	} catch (error) {
		yield put(setCommentsStatus(FetchingStatus.FAILURE));
		yield put(
			setCommentsError(
				"Не удалось загрузить комментарии. Повторите попытку чуть позже..."
			)
		);
	}
}

function* watchOnLoadComments() {
	yield takeLeading(getComments, onLoadComments);
}

export default function* commentsSaga() {
	yield all([fork(watchOnLoadComments)]);
}
