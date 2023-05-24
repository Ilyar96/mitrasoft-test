import { FC, useEffect } from "react";

import { useActions } from "../../hooks";
import { useAppSelector } from "../../redux/store";
import { selectPostsPage } from "../../redux/slices/posts/selectors";

import "./Home.scss";

export const Home: FC = () => {
	const { getPosts, setPage } = useActions();
	const page = useAppSelector(selectPostsPage);

	useEffect(() => {
		getPosts();
	}, [page]);

	const clickMoreHandler = () => setPage(page + 1);

	return (
		<div>
			Home Component
			<button onClick={clickMoreHandler}>Test</button>
		</div>
	);
};
