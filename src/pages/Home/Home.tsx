import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useActions } from "../../hooks";
import {
	selectPaginatedPosts,
	selectPosts,
	selectPostsError,
	selectPostsStatus,
} from "../../redux/slices/posts/selectors";
import { Loader, Pagination, PostFilters, PostList } from "../../components";
import { FetchingStatus } from "../../types/common";
import { useAppSelector } from "../../redux/store";

import "./Home.scss";
import { selectComments } from "../../redux/slices/comments/selectors";

export const Home: FC = () => {
	const { getComments, getPosts } = useActions();
	const status = useAppSelector(selectPostsStatus);
	const error = useAppSelector(selectPostsError);
	const posts = useAppSelector(selectPosts);
	const paginatedPosts = useAppSelector(selectPaginatedPosts);
	const comments = useAppSelector(selectComments);

	useEffect(() => {
		comments.length === 0 && getComments();
		posts.length === 0 && getPosts();
		// eslint-disable-next-line
	}, []);

	return (
		<Container className="home-container d-flex flex-column">
			{status === FetchingStatus.PENDING && <Loader />}

			{status === FetchingStatus.SUCCESS && (
				<>
					<PostFilters />
					<h1 className="h2 mb-4">Список постов:</h1>
					<PostList posts={paginatedPosts} />
					<Pagination className="mt-5" />
				</>
			)}

			{status === FetchingStatus.FAILURE && (
				<h1 className="h2 mb-4">{error}</h1>
			)}
		</Container>
	);
};
