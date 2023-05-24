import { Id } from "./common";

export interface PostQuery {
	_limit?: number;
	_page?: number;
}

export interface Post {
	userId: number;
	id: Id;
	title: string;
	body: string;
}
