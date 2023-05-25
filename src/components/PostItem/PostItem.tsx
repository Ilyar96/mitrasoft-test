import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { Image } from "react-bootstrap";

import { Post } from "../../types/post";
import { AppRoutes, Id } from "../../types/common";

import "./PostItem.scss";
import { userAvatarMap } from "../../constants/avatars";

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
		return (
			<Component className={cn(className, "post-item")}>
				<Link className="post-avatar-link" to={`${AppRoutes.USERS}/${userId}`}>
					<Image
						className="post-avatar"
						src={userAvatarMap.get(userId)}
						roundedCircle
						width={50}
						height={50}
						alt="Автар"
					/>
				</Link>
				<h3 className="post-title">{title}</h3>
				<p className="post-body">{body}</p>
			</Component>
		);
	}
);
