import { FC } from "react";

import { Search, Sort } from "../";

export const PostFilters: FC = () => {
	return (
		<div className="mt-5 mb-4 d-flex justify-content-between">
			<Search />
			<Sort />
		</div>
	);
};
