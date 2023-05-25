import { FetchingStatus } from "../../../types/common";
import { Post } from "../../../types/post";

export enum SortBy {
	"TITLE" = "title",
	"DEFAULT" = "default",
}

export type Order = 1 | -1;

export interface Sort {
	order: Order;
	sortBy: SortBy;
}

export interface PostsData {
	status: FetchingStatus;
	error: string | null;
	entities: Post[];
	page: number;
	sortBy: SortBy;
	order: Order;
	search: string;
}
