import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsData } from "./types";
import { FetchingStatus } from "../../../types/common";
import { Post } from "../../../types/post";

const initialState: PostsData = {
	entities: [],
	error: null,
	page: 1,
	status: FetchingStatus.IDLE,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<Post[]>) {
			state.entities.push(...action.payload);
		},
		setStatus(state, action: PayloadAction<FetchingStatus>) {
			state.status = action.payload;
		},
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
});

export const GET_POSTS_ACTION_TYPE = `${postsSlice.name}/getPosts`;
export const getPosts = createAction(GET_POSTS_ACTION_TYPE);

export const { setPosts, setError, setPage, setStatus } = postsSlice.actions;

export default postsSlice;
