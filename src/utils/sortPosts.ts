import { Order, SortBy } from "../redux/slices/posts/types";
import { Post } from "../types/post";

export const sortPosts = (
	sortBy: SortBy,
	order: Order,
	post1: Post,
	post2: Post
) => {
	if (sortBy === SortBy.TITLE) {
		if (order === -1) {
			return post1.title > post2.title ? 1 : -1;
		}

		return post1.title > post2.title ? -1 : 1;
	}

	return 1;
};
