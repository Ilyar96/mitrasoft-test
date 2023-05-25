import { FC } from "react";
import { Id } from "../../types/common";

import { useAppSelector } from "../../redux/store";
import { selectComments } from "../../redux/slices/comments/selectors";
import { CommentItem } from "../";

import "./CommentList.scss";

interface CommentListProps {
	postId: Id;
}

export const CommentList: FC<CommentListProps> = ({ postId }) => {
	const comments = useAppSelector(selectComments);
	const filteredComments = comments.filter(
		(comment) => comment.postId === postId
	);

	return (
		<div className="comments">
			{filteredComments.map((comment) => (
				<CommentItem key={comment.id} {...comment} />
			))}
		</div>
	);
};
