import { FetchingStatus } from "../../../types/common";
import { Post } from "../../../types/post";

export interface PostsData {
	status: FetchingStatus;
	error: string | null;
	entities: Post[];
	page: number;
}

//TODO удалить?
export enum PostsActionTypes {
	GET_POSTS = "GET_POSTS",
	SET_POSTS = "SET_POSTS",
	CHANGE_STATUS = "CHANGE_STATUS",
	SET_ERROR = "SET_ERROR",
	CHANGE_PAGE = "CHANGE_PAGE",
}
