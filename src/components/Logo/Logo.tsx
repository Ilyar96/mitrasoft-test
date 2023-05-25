import { FC } from "react";

import "./Logo.scss";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../types/common";

export const Logo: FC = () => {
	const { pathname } = useLocation();

	const isHomePage = pathname === AppRoutes.HOME;
	const logoClassName = "logo";

	if (!isHomePage) {
		return (
			<Link className={logoClassName} to={AppRoutes.HOME}>
				Logo
			</Link>
		);
	}

	return <div className={logoClassName}>Logo</div>;
};
