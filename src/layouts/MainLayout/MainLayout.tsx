import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components";

import "./MainLayout.scss";

export const MainLayout: FC = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main d-flex flex-column">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
