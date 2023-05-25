import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useActions } from "../../hooks";
import { useAppSelector } from "../../redux/store";
import {
	selectPostsPage,
	selectPostsSearch,
	selectPostsSortBy,
	selectPostsSortOrder,
} from "../../redux/slices/posts/selectors";
import { Pagination, PostFilters, PostList } from "../../components";

import "./Home.scss";

export const Home: FC = () => {
	const { getComments, getPosts, setPage } = useActions();
	const page = useAppSelector(selectPostsPage);
	const sortBy = useAppSelector(selectPostsSortBy);
	const order = useAppSelector(selectPostsSortOrder);
	const search = useAppSelector(selectPostsSearch);

	useEffect(() => {
		getComments();
		getPosts();
	}, []);

	// useEffect(() => {
	// 	getPosts();
	// }, [page, sortBy, order, search]);

	return (
		<Container>
			<PostFilters />
			<h1 className="h2 mb-4">Список постов:</h1>
			<PostList />
			<Pagination className="mt-5" />
		</Container>
	);
};
