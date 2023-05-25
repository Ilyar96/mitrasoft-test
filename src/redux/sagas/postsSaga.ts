import { put, call, takeLeading, all, fork, select } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
	setPostsError,
	setPosts,
	setPostsStatus,
	getPosts,
	setPaginatedPosts,
} from "../slices/posts/slice";
import { FetchingStatus } from "../../types/common";
import postService from "../../services/post.service";
import { Post } from "../../types/post";
import {
	selectPostsPage,
	selectPostsSearch,
	selectPostsSortBy,
	selectPostsSortOrder,
} from "../slices/posts/selectors";
import { Order, SortBy } from "../slices/posts/types";
import { filterPosts, sortPosts } from "../../utils";
import { postsPerPage } from "../../constants/constants";

function* onLoadPosts() {
	try {
		const sortOrder: Order = yield select(selectPostsSortOrder);
		const sortBy: SortBy = yield select(selectPostsSortBy);
		const search: string = yield select(selectPostsSearch);
		const page: number = yield select(selectPostsPage);

		yield put(setPostsStatus(FetchingStatus.PENDING));
		yield put(setPostsError(null));

		const posts: Post[] = yield call(postService.get);
		const filteredPostList = posts.filter((post) => filterPosts(post, search));
		filteredPostList.sort((a, b) => sortPosts(sortBy, sortOrder, a, b));
		const paginatedPosts = filteredPostList.slice(
			(page - 1) * postsPerPage,
			page * postsPerPage
		);

		yield put(setPostsStatus(FetchingStatus.SUCCESS));
		yield put(setPosts(filteredPostList));
		yield put(setPaginatedPosts(paginatedPosts));
	} catch (error) {
		console.error(error);

		yield put(setPostsStatus(FetchingStatus.FAILURE));
		yield put(
			setPostsError("Что-то пошло не так. Повторите попытку чуть позже...")
		);
	}
}

function* watchOnLoadPosts() {
	yield takeLeading(getPosts, onLoadPosts);
}

export default function* postsSaga() {
	yield all([fork(watchOnLoadPosts)]);
}
