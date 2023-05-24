import { FC } from "react";
import Container from "react-bootstrap/Container";

import { Logo, Menu } from "../";

import "./Header.scss";

export const Header: FC = () => {
	return (
		<header className="p-3 bg-dark text-white header">
			<Container className="d-flex flex-wrap align-items-center justify-content-between">
				<Logo />
				<Menu />
			</Container>
		</header>
	);
};
