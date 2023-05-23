import { FC, useEffect } from "react";

import styles from "./Home.module.scss";
import { useActions } from "../../hooks";
import { useAppSelector } from "../../redux/store";
import { selectPostsPage } from "../../redux/slices/posts/selectors";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
	const { getPosts, setPage } = useActions();
	const page = useAppSelector(selectPostsPage);

	useEffect(() => {
		getPosts();
	}, [page]);

	const clickMoreHandler = () => setPage(page + 1);

	return (
		<div className={styles.Home}>
			Home Component
			<button onClick={clickMoreHandler}>Test</button>
		</div>
	);
};
