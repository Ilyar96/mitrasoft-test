import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserData } from "./types";
import { FetchingStatus, Id } from "../../../types/common";
import { User } from "../../../types/user";

const initialState: UserData = {
	data: null,
	error: null,
	status: FetchingStatus.IDLE,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.data = action.payload;
		},
		setUserStatus(state, action: PayloadAction<FetchingStatus>) {
			state.status = action.payload;
		},
		setUserError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
		getUser(state, _: PayloadAction<Id>) {
			return state;
		},
	},
});

export const { setUser, setUserError, setUserStatus, getUser } =
	userSlice.actions;

export default userSlice;
