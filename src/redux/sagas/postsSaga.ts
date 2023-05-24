import { put, call, takeLeading, all, fork, select } from "redux-saga/effects";

import {
	GET_POSTS_ACTION_TYPE,
	setPostsError,
	setPosts,
	setPostsStatus,
} from "../slices/posts/slice";
import { FetchingStatus } from "../../types/common";
import postService from "../../services/post.service";
import { Post } from "../../types/post";
import { selectPostsPage } from "../slices/posts/selectors";

function* onLoadPosts() {
	try {
		const page: number = yield select(selectPostsPage);

		yield put(setPostsStatus(FetchingStatus.PENDING));
		yield put(setPostsError(null));

		const posts: Post[] = yield call(postService.get, { _page: page });

		yield put(setPostsStatus(FetchingStatus.SUCCESS));
		yield put(setPosts(posts));
	} catch (error) {
		console.error(error);

		yield put(setPostsStatus(FetchingStatus.FAILURE));
		yield put(
			setPostsError("Что-то пошло не так. Повторите попытку чуть позже...")
		);
	}
}

function* watchOnLoadPosts() {
	yield takeLeading(GET_POSTS_ACTION_TYPE, onLoadPosts);
}

export default function* postsSaga() {
	yield all([fork(watchOnLoadPosts)]);
}
