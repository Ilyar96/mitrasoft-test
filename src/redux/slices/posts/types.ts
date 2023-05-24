import { FetchingStatus } from "../../../types/common";
import { Post } from "../../../types/post";

export interface PostsData {
	status: FetchingStatus;
	error: string | null;
	entities: Post[];
	page: number;
}