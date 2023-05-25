import { FC } from "react";

import { Search, Sort } from "../";

export const PostFilters: FC = () => {
	return (
		<div className="mb-4 d-flex justify-content-between">
			<Search />
			<Sort />
		</div>
	);
};
