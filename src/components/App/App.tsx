import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../../layouts";
import { AppRoutes } from "../../types/common";

const Home = lazy(() =>
	import("../../pages").then((module) => ({
		default: module.Home,
	}))
);
const About = lazy(() =>
	import("../../pages").then((module) => ({
		default: module.About,
	}))
);
const User = lazy(() =>
	import("../../pages").then((module) => ({
		default: module.User,
	}))
);

export const App = () => {
	return (
		<Suspense>
			<Routes>
				<Route path={AppRoutes.HOME} element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path={AppRoutes.ABOUT} element={<About />} />
					<Route path={`${AppRoutes.USERS}/:id`} element={<User />} />

					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</Suspense>
	);
};
