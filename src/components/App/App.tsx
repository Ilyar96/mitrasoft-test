import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../../layouts";
import { Home } from "../../pages";

import styles from "./App.module.scss";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />

				<Route path="*" element={<h1>Not found</h1>} />
			</Route>
		</Routes>
	);
};
