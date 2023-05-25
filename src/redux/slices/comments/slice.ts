import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CommentsData } from "./types";
import { FetchingStatus } from "../../../types/common";
import { Comment } from "../../../types/comment";

const initialState: CommentsData = {
	entities: [],
	error: null,
	status: FetchingStatus.IDLE,
};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		setComments(state, action: PayloadAction<Comment[]>) {
			state.entities = action.payload;
		},
		setCommentsStatus(state, action: PayloadAction<FetchingStatus>) {
			state.status = action.payload;
		},
		setCommentsError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
		getComments(state) {
			return state;
		},
	},
});

export const { getComments, setComments, setCommentsError, setCommentsStatus } =
	commentsSlice.actions;

export default commentsSlice;
