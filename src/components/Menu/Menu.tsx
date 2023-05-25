import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
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
	const firstMenuItem = useRef<HTMLAnchorElement>(null);

	const toggleOpen = (value?: boolean) => () => {
		if (value !== undefined) {
			setIsOpen(value);
		} else {
			setIsOpen((prev) => !prev);
		}
	};

	const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.code === "Space" || e.code === "Enter") {
			setTimeout(function () {
				firstMenuItem.current?.focus();
			}, 0);
		}
	};

	const cb = (e: globalThis.KeyboardEvent) => {
		if (e.code === "Escape") {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", cb);

		return () => {
			document.removeEventListener("keydown", cb);
		};
	}, []);

	const menuItems = menuList.map(({ title, href }, index) => (
		<Link
			className="nav-link mb-1"
			to={href}
			key={href}
			ref={index === 0 ? firstMenuItem : undefined}
		>
			{title}
		</Link>
	));

	return (
		<>
			<Button
				variant="dark"
				className={btnClassName}
				onClick={toggleOpen()}
				onKeyDown={onKeyDown}
			>
				<span className="menu-icon">
					<span />
				</span>
			</Button>

			<Portal>
				<div className={menuClassName}>
					<MenuUserInfo className="mb-3" />
					<nav className="d-flex flex-column">{menuItems}</nav>
				</div>

				<button
					className={overlayClassName}
					onClick={toggleOpen(false)}
					tabIndex={0}
				/>
			</Portal>
		</>
	);
};
