import React, { FC } from "react";
import { Card, Image } from "react-bootstrap";

import { User } from "../../types/user";

import "./UserCard.scss";
import { userAvatarMap } from "../../constants/avatars";

interface UserCardProps extends User {}

export const UserCard: FC<UserCardProps> = ({
	address,
	company,
	email,
	id,
	name,
	phone,
	username,
	website,
}) => {
	return (
		<Card className="user-card">
			<Card.Body className="user-card-body d-sm-flex">
				<div className="left-col">
					<Image
						className="mb-2 mx-sm-auto d-block"
						src={userAvatarMap.get(id)}
						thumbnail
						width={120}
						height={120}
						alt="Автар"
					/>

					<Card.Title>
						{username} ({name})
					</Card.Title>

					<Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
				</div>

				<div className="right-col">
					<Card.Text className="mt-0 mb-1">Город: {address.city}</Card.Text>
					<Card.Text className="mt-0 mb-1">Компания: {company.name}</Card.Text>
					<Card.Text className="mt-0 mb-1">
						Телефон:{" "}
						<Card.Link href={`tel:${phone.replace(/\D/g, "")}`} target="_blank">
							{phone}
						</Card.Link>
					</Card.Text>
					<Card.Text className="mt-0 mb-1">
						Сайт:{" "}
						<Card.Link href={website} target="_blank">
							{website}
						</Card.Link>
					</Card.Text>
				</div>
			</Card.Body>
		</Card>
	);
};
