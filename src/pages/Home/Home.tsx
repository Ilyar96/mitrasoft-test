import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useActions } from "../../hooks";
import { selectPostsStatus } from "../../redux/slices/posts/selectors";
import { Loader, Pagination, PostFilters, PostList } from "../../components";
import { FetchingStatus } from "../../types/common";
import { useAppSelector } from "../../redux/store";

import "./Home.scss";

export const Home: FC = () => {
	const { getComments, getPosts } = useActions();
	const status = useAppSelector(selectPostsStatus);

	useEffect(() => {
		getComments();
		getPosts();
	}, []);

	return (
		<Container className="home-container d-flex flex-column">
			<PostFilters />
			<h1 className="h2 mb-4">Список постов:</h1>
			{status === FetchingStatus.PENDING ? (
				<Loader />
			) : (
				<>
					<PostList />
					<Pagination className="mt-5" />
				</>
			)}
		</Container>
	);
};
