import { FC } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

import { useAppSelector } from "../../redux/store";
import {
	selectPosts,
	selectPostsPage,
} from "../../redux/slices/posts/selectors";
import { useActions } from "../../hooks";
import { postsPerPage } from "../../constants";

import "./Pagination.scss";

export interface PaginationProps {
	className?: string;
}

export const Pagination: FC<PaginationProps> = ({ className }) => {
	const page = useAppSelector(selectPostsPage);
	const posts = useAppSelector(selectPosts);
	const { setPage } = useActions();

	return (
		<div className={className}>
			<PaginationControl
				page={page}
				between={4}
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
