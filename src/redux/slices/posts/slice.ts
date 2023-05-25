import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostsData, Sort, SortBy } from "./types";
import { FetchingStatus } from "../../../types/common";
import { Post } from "../../../types/post";

const initialState: PostsData = {
	entities: [],
	paginatedEntities: [],
	error: null,
	page: 1,
	status: FetchingStatus.IDLE,
	sortBy: SortBy.DEFAULT,
	order: 1,
	search: "",
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<Post[]>) {
			state.entities = action.payload;
		},
		setPaginatedPosts(state, action: PayloadAction<Post[]>) {
			state.paginatedEntities = action.payload;
		},
		setPostsStatus(state, action: PayloadAction<FetchingStatus>) {
			state.status = action.payload;
		},
		setPostsError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sortBy = action.payload.sortBy;
			state.order = action.payload.order;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		getPosts(state) {
			return state;
		},
	},
});

export const {
	getPosts,
	setPosts,
	setPostsError,
	setPage,
	setPostsStatus,
	setSort,
	setSearch,
	setPaginatedPosts,
} = postsSlice.actions;

export default postsSlice;
