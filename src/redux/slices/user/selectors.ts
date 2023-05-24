import { RootState } from "../../store";

export const selectPosts = (state: RootState) => state.posts.entities;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
export const selectPostsPage = (state: RootState) => state.posts.page;
