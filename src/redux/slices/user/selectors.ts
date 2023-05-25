import { RootState } from "../../store";

export const selectUser = (state: RootState) => state.user.data;
export const selectUsersStatus = (state: RootState) => state.user.status;
export const selectUsersError = (state: RootState) => state.user.error;
