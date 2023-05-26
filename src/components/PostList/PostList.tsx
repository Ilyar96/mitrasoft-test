import { FC } from "react";

import { PostItem } from "../";
import { Post } from "../../types/post";

import "./PostList.scss";

export interface PostListProps {
	posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
	const postList = posts.map((post) => <PostItem key={post.id} {...post} />);

	if (posts.length === 0) {
		return <p>Ничего не найдено</p>;
	}

	return <div className="posts">{postList}</div>;
};
