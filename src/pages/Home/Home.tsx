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
import { PostFilters, PostList } from "../../components";

import "./Home.scss";

export const Home: FC = () => {
	const { getPosts, setPage } = useActions();
	const page = useAppSelector(selectPostsPage);
	const sortBy = useAppSelector(selectPostsSortBy);
	const order = useAppSelector(selectPostsSortOrder);
	const search = useAppSelector(selectPostsSearch);

	useEffect(() => {
		getPosts();
	}, [page, sortBy, order, search]);

	return (
		<Container>
			<PostFilters />
			<h1 className="h2">Список постов:</h1>
			<PostList />
		</Container>
	);
};
