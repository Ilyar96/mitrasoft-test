import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { useActions } from "../../hooks";
import { Loader, UserCard } from "../../components";
import { useAppSelector } from "../../redux/store";
import {
	selectUser,
	selectUsersStatus,
} from "../../redux/slices/user/selectors";
import { AppRoutes, FetchingStatus } from "../../types/common";

import "./User.scss";

export const User: FC = () => {
	const { id } = useParams();
	const { getUser } = useActions();
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectUsersStatus);

	useEffect(() => {
		getUser(Number(id));
	}, [id]);

	if (status === FetchingStatus.PENDING) {
		return <Loader />;
	}

	if (!user && status === FetchingStatus.FAILURE) {
		return <Navigate to={AppRoutes.HOME} />;
	}

	return <Container>{user && <UserCard {...user} />}</Container>;
};
