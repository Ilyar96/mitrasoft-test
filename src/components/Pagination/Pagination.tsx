import { FC } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import cn from "classnames";

import { useAppSelector } from "../../redux/store";
import {
	selectFilteredPosts,
	selectPostsPage,
} from "../../redux/slices/posts/selectors";
import { useActions } from "../../hooks";
import { postsPerPage } from "../../constants/constants";

import "./Pagination.scss";

export interface PaginationProps {
	className?: string;
}

export const Pagination: FC<PaginationProps> = ({ className }) => {
	const page = useAppSelector(selectPostsPage);
	const posts = useAppSelector(selectFilteredPosts);
	const { setPage } = useActions();

	return (
		<div className={cn(className, "d-flex justify-content-center")}>
			<PaginationControl
				page={page}
				between={2}
				total={posts.length}
				limit={postsPerPage}
				changePage={(page) => {
					setPage(page);
				}}
				ellipsis={1}
			/>
		</div>
	);
};
