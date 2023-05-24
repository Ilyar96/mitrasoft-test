import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useActions } from "../../hooks";

import "./User.scss";

export const User: FC = () => {
	const { id } = useParams();
	const { getUser } = useActions();

	useEffect(() => {
		getUser(Number(id));
	}, [id]);

	return <div>User</div>;
};
