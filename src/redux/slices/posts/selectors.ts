import { RootState } from "../../store";

export const selectPosts = (state: RootState) => state.posts.entities;
export const selectPaginatedPosts = (state: RootState) =>
	state.posts.paginatedEntities;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
export const selectPostsPage = (state: RootState) => state.posts.page;
export const selectPostsSortBy = (state: RootState) => state.posts.sortBy;
export const selectPostsSortOrder = (state: RootState) => state.posts.order;
export const selectPostsSearch = (state: RootState) => state.posts.search;
