import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../../layouts";
import { Home, User } from "../../pages";
import { AppRoutes } from "../../types/common";

export const App = () => {
	return (
		<Routes>
			<Route path={AppRoutes.HOME} element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path={`${AppRoutes.USERS}/:id`} element={<User />} />

				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
};
