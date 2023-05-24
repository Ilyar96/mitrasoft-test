import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import cn from "classnames";

import { Portal, MenuUserInfo } from "../";
import { AppRoutes } from "../../types/common";

import "./Menu.scss";
import { Link } from "react-router-dom";

const menuList = [
	{ title: "Список постов", href: AppRoutes.HOME },
	{ title: "Обо мне", href: AppRoutes.ABOUT },
];

export const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuClassName = cn("menu me-auto flex-column bg-light p-3", {
		open: isOpen,
	});
	const btnClassName = cn("menu-btn text-white", { open: isOpen });
	const overlayClassName = cn("overlay", { open: isOpen });

	const toggleOpen = (value?: boolean) => () => {
		if (value) {
			setIsOpen(value);
		} else {
			setIsOpen((prev) => !prev);
		}
	};

	const menuItems = menuList.map(({ title, href }) => (
		<Link className="nav-link mb-1" to={href} key={href}>
			{title}
		</Link>
	));

	return (
		<>
			<Button variant="dark" className={btnClassName} onClick={toggleOpen()}>
				<span className="menu-icon">
					<span />
				</span>
			</Button>

			<Portal>
				<div className={overlayClassName} onClick={toggleOpen(false)} />

				<div className={menuClassName}>
					<MenuUserInfo className="mb-3" />
					<nav className="d-flex flex-column">{menuItems}</nav>
				</div>
			</Portal>
		</>
	);
};
