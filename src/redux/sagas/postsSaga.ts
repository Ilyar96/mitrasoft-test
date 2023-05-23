import { put, call, takeEvery, all, fork, select } from "redux-saga/effects";

import {
	GET_POSTS_ACTION_TYPE,
	setError,
	setPosts,
	setStatus,
} from "../slices/posts/slice";
import { FetchingStatus } from "../../types/common";
import postService from "../../services/post.service";
import { Post } from "../../types/post";
import { selectPostsPage, selectPostsStatus } from "../slices/posts/selectors";

function* onLoadPosts(controller: any) {
	try {
		const page: number = yield select(selectPostsPage);
		const status: FetchingStatus = yield select(selectPostsStatus);

		yield put(setStatus(FetchingStatus.PENDING));
		yield put(setError(null));

		const posts: Post[] = yield call(postService.get, { _page: page });

		yield put(setStatus(FetchingStatus.SUCCESS));
		yield put(setPosts(posts));
	} catch (error) {
		console.error(error);

		yield put(setStatus(FetchingStatus.FAILURE));
		yield put(setError("Что-то пошло не так. Повторите попытку чуть позже..."));
	}
}

function* watchOnLoadPosts() {
	yield takeEvery(GET_POSTS_ACTION_TYPE, onLoadPosts);
}

export default function* postsSaga() {
	yield all([fork(watchOnLoadPosts)]);
}
