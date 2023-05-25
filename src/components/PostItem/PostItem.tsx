import React, { FC } from "react";
import cn from "classnames";

import { Post } from "../../types/post";

import "./PostItem.scss";

interface PostItemProps {
	post: Post;
	as?: "li" | "div" | "article";
	className?: string;
}

export const PostItem: FC<PostItemProps> = ({
	post,
	as: Component = "article",
	className,
}) => {
	const { body, title, userId } = post;

	return (
		<Component className={cn(className, "post-item")}>
			<h3>{title}</h3>
			<p>{body}</p>
		</Component>
	);
};
