import { FC } from "react";

import { Search, Sort } from "../";

export const PostFilters: FC = () => {
	return (
		<div className="mb-4 d-md-flex justify-content-between">
			<Search className="mb-md-0 mb-3" />
			<Sort />
		</div>
	);
};
