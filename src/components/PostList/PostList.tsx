import { FC } from "react";

import { PostItem } from "../";
import { Post } from "../../types/post";
import { useAppSelector } from "../../redux/store";
import { selectFilteredPosts } from "../../redux/slices/posts/selectors";

import "./PostList.scss";

export interface PostListProps {
	posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
	const postList = posts.map((post) => <PostItem key={post.id} {...post} />);
	const filteredPosts = useAppSelector(selectFilteredPosts);

	if (filteredPosts.length === 0) {
		return <p>Ничего не найдено</p>;
	}

	return <div className="posts">{postList}</div>;
};
