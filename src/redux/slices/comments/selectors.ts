import { RootState } from "../../store";

export const selectComments = (state: RootState) => state.posts.entities;
export const selectCommentsStatus = (state: RootState) => state.posts.status;
export const selectCommentsError = (state: RootState) => state.posts.error;
