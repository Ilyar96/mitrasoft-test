import { FC } from "react";

import { useAppSelector } from "../../redux/store";
import { selectPaginatedPosts } from "../../redux/slices/posts/selectors";
import { PostItem } from "../";

import "./PostList.scss";

export const PostList: FC = () => {
	const paginatedPosts = useAppSelector(selectPaginatedPosts);

	const postList = paginatedPosts.map((post) => (
		<PostItem key={post.id} {...post} />
	));

	if (paginatedPosts.length === 0) {
		return <p>Ничего не найдено</p>;
	}

	return <div>{postList}</div>;
};
