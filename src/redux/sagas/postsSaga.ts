import {
	put,
	call,
	takeLeading,
	all,
	fork,
	select,
	takeEvery,
} from "redux-saga/effects";

import { FetchingStatus } from "../../types/common";
import postService from "../../services/post.service";
import { Post } from "../../types/post";
import {
	selectFilteredPosts,
	selectPosts,
	selectPostsPage,
	selectPostsSearch,
	selectPostsSortBy,
	selectPostsSortOrder,
} from "../slices/posts/selectors";
import { Order, SortBy } from "../slices/posts/types";
import { delay, filterPosts, sortPosts } from "../../utils";
import { postsPerPage } from "../../constants/constants";
import {
	setSearch,
	setPostsError,
	setPosts,
	setPostsStatus,
	getPosts,
	setPaginatedPosts,
	setSort,
	setFilteredPosts,
	setPage,
} from "../actions";

function* onLoadPosts() {
	try {
		yield put(setPostsStatus(FetchingStatus.PENDING));
		yield put(setPostsError(null));

		yield delay(1);
		const posts: Post[] = yield call(postService.get);

		yield put(setPostsStatus(FetchingStatus.SUCCESS));
		yield put(setPosts(posts));
		yield put(setFilteredPosts(posts));
		yield onPaginatePosts();
	} catch (error) {
		console.error(error);

		yield put(setPostsStatus(FetchingStatus.FAILURE));
		yield put(
			setPostsError("Что-то пошло не так. Повторите попытку чуть позже...")
		);
	}
}

function* onFilterPosts() {
	const posts: Post[] = yield select(selectPosts);
	const sortOrder: Order = yield select(selectPostsSortOrder);
	const sortBy: SortBy = yield select(selectPostsSortBy);
	const search: string = yield select(selectPostsSearch);

	const filteredPostList = posts.filter((post) => filterPosts(post, search));
	filteredPostList.sort((a, b) => sortPosts(sortBy, sortOrder, a, b));

	yield put(setFilteredPosts(filteredPostList));
	yield onPaginatePosts();
}

function* onPaginatePosts() {
	const filteredPostList: Post[] = yield select(selectFilteredPosts);
	const page: number = yield select(selectPostsPage);

	const paginatedPosts = filteredPostList.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage
	);

	yield put(setPaginatedPosts(paginatedPosts));
}

function* watchOnLoadPosts() {
	yield takeLeading(getPosts, onLoadPosts);
	yield takeEvery(setSort, onFilterPosts);
	yield takeEvery(setSearch, onFilterPosts);
	yield takeEvery(setPage, onPaginatePosts);
}

export default function* postsSaga() {
	yield all([fork(watchOnLoadPosts)]);
}
