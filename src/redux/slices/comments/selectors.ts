import { RootState } from "../../store";

export const selectComments = (state: RootState) => state.comments.entities;
export const selectCommentsStatus = (state: RootState) => state.comments.status;
export const selectCommentsError = (state: RootState) => state.comments.error;
