import { FC, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import { useActions } from "../../hooks";
import { Loader, UserCard } from "../../components";
import { useAppSelector } from "../../redux/store";
import {
	selectUser,
	selectUsersStatus,
} from "../../redux/slices/user/selectors";
import { AppRoutes, FetchingStatus } from "../../types/common";
import { selectPosts } from "../../redux/slices/posts/selectors";
import { selectComments } from "../../redux/slices/comments/selectors";
import { PostList } from "../../components/PostList/PostList";

import "./User.scss";

export const User: FC = () => {
	const params = useParams();
	const id = Number(params.id);
	const { getUser } = useActions();
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectUsersStatus);
	const comments = useAppSelector(selectComments);
	const posts = useAppSelector(selectPosts);
	const { getComments, getPosts } = useActions();

	const currentUserPosts = posts.filter((post) => post.userId === id);

	useEffect(() => {
		comments.length === 0 && getComments();
		posts.length === 0 && getPosts();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		user?.id !== id && getUser(id);
		// eslint-disable-next-line
	}, [id]);

	if (status === FetchingStatus.PENDING) {
		return <Loader />;
	}

	if (!user && status === FetchingStatus.FAILURE) {
		return <Navigate to={AppRoutes.HOME} />;
	}

	return (
		<>
			<Helmet>
				<title>
					Информация о пользователе {user?.name ? user.name : ""} | Тестовое
					задание
				</title>
			</Helmet>
			<Container>
				<Link to={AppRoutes.HOME} className="btn btn-primary mb-5">
					Вернуться ко всем постам
				</Link>

				{user && <UserCard className="mb-5" {...user} />}
				<PostList posts={currentUserPosts} />
			</Container>
		</>
	);
};
