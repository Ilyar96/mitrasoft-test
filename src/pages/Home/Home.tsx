import { FC, useEffect } from "react";

import styles from "./Home.module.scss";
import postService from "../../services/post.service";
import userService from "../../services/user.service";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
	useEffect(() => {
		postService.get({ _limit: 10, _page: 1 }).then(console.log);
		userService.getById(1).then(console.log);
	}, []);

	return <div className={styles.Home}>Home Component</div>;
};
