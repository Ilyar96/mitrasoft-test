export interface PostQuery {
	_limit?: number;
	_page?: number;
}

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}
