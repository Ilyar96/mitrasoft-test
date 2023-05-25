import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { Button, Collapse, Image } from "react-bootstrap";

import { userAvatarMap } from "../../constants/avatars";
import { AppRoutes } from "../../types/common";
import { CommentList } from "../CommentList/CommentList";
import { Post } from "../../types/post";

import "./PostItem.scss";

interface PostItemProps extends Post {
	as?: "li" | "div" | "article";
	className?: string;
}

export const PostItem: FC<PostItemProps> = memo(
	({ body, title, userId, id, as: Component = "article", className }) => {
		const [isOpen, setIsOpen] = useState(false);

		const commentToggleHandler = () => {
			setIsOpen((prev) => !prev);
		};

		return (
			<Component className={cn(className, "post-item")}>
				<div className="post-content">
					<Link
						className="post-avatar-link"
						to={`${AppRoutes.USERS}/${userId}`}
					>
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
				</div>

				<Button
					className="post-btn"
					variant="primary"
					onClick={commentToggleHandler}
				>
					{isOpen ? "Закрыть" : "Открыть"} комментарии
				</Button>

				<Collapse in={isOpen}>
					<div>
						<CommentList postId={id} />
					</div>
				</Collapse>
			</Component>
		);
	}
);
