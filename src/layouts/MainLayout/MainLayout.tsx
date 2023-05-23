import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";
import { Footer, Header } from "../../components";

export const MainLayout: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
