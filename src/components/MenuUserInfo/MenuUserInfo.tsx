import { FC } from "react";
import Image from "react-bootstrap/Image";
import cn from "classnames";

import "./MenuUserInfo.scss";
import avatarUrl from "./avatar.jpeg";

interface MenuUserInfoProps {
	className?: string;
}

export const MenuUserInfo: FC<MenuUserInfoProps> = ({ className }) => {
	return (
		<div className={cn("user-info pb-3", className)}>
			<Image
				className="user-avatar"
				src={avatarUrl}
				roundedCircle
				width={50}
				height={50}
				alt="Автар"
			/>
			<div className="user-name">Касыймов Ильяр</div>
			<a className="user-email" href="mailto:kasyymov.ilyar@gmail.com">
				kasyymov.ilyar@gmail.com
			</a>
		</div>
	);
};
