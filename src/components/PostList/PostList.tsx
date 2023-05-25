import React, { FC } from "react";

import { useAppSelector } from "../../redux/store";
import { selectPosts } from "../../redux/slices/posts/selectors";
import { PostItem } from "../";

import "./PostList.scss";

export const PostList: FC = () => {
	const posts = useAppSelector(selectPosts);

	const postList = posts.map((post) => <PostItem key={post.id} post={post} />);

	if (posts.length === 0) {
		return <p>Ничего не найдено</p>;
	}

	return <div>{postList}</div>;
};
