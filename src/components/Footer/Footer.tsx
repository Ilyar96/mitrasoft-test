import { FC } from "react";
import { Container } from "react-bootstrap";

import { Logo } from "../";

import "./Footer.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="p-4 bg-dark text-white header">
			<Container className="d-flex justify-content-center">
				<div>© {currentYear}</div>
			</Container>
		</footer>
	);
};
