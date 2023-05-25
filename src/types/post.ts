import { Sort } from "../redux/slices/posts/types";
import { Id } from "./common";

export interface PostQuery {
	_page?: number;
}

export interface Post {
	userId: number;
	id: Id;
	title: string;
	body: string;
}

export interface SortItem extends Sort {
	label: string;
}
