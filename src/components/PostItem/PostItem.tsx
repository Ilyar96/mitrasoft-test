import React, { FC, memo } from "react";
import cn from "classnames";

import { Post } from "../../types/post";

import "./PostItem.scss";
import { Id } from "../../types/common";

interface PostItemProps {
	body: string;
	title: string;
	userId: Id;
	id: Id;
	as?: "li" | "div" | "article";
	className?: string;
}

export const PostItem: FC<PostItemProps> = memo(
	({ body, title, userId, id, as: Component = "article", className }) => {
		console.log("title: ", title, "render");

		return (
			<Component className={cn(className, "post-item")}>
				<h3>{title}</h3>
				<p>{body}</p>
			</Component>
		);
	}
);
