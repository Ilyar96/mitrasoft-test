import React, { FC } from "react";

import "./CommentItem.scss";
import { Comment } from "../../types/comment";

interface CommentItemProps extends Comment {}

export const CommentItem: FC<CommentItemProps> = ({
	body,
	email,
	id,
	name,
	postId,
}) => {
	return (
		<div className="comment-item">
			<h3 className="h5">{email}</h3>
			<p>{body}</p>
		</div>
	);
};
