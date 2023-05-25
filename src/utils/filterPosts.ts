import { Post } from "../types/post";

export const filterPosts = (post: Post, search: string) =>
	post.title.toLowerCase().includes(search.toLowerCase());
