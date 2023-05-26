import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./About.scss";

export const About: FC = () => {
	return (
		<Container>
			<h1 className="h3">Ильяр Касыймов</h1>
			<h2 className="h4 mb-4">web-разработчик</h2>
			<p className="mb-1">
				На протяжении 2 лет занимаюсь разработкой web-сайтов в качестве
				фрилансера. Список задач с которыми чаще всего сталкиваюсь:
			</p>

			<ul className="mt-1">
				<li>
					Верстка адаптивных и кросбраузерных сайтов разной сложности с
					использованием HTML5, CSS3, Javascript, Gulp, Webpack.
				</li>
				<li>
					Создание корпоративных сайтов, лендингов, интернет-магазинов,
					используя cms WordPress.
				</li>
				<li>Оптимизация скорости загрузки сайта.</li>
				<li>Различные скрипты на JavaScript</li>
			</ul>

			<h2 className="h5 mb-1">Технические навыки:</h2>
			<ul className="mt-1">
				<li>HTML5</li>
				<li>CCS3</li>
				<li>Sass (SCSS)</li>
				<li>JavaScript</li>
				<li>TypesSript</li>
				<li>React</li>
				<li>Nextjs</li>
				<li>Git</li>
				<li>GitHub</li>
			</ul>

			<h2 className="h5 mb-1">Контакты:</h2>
			<ul className="mt-1">
				<li>
					<a href="https://t.me/Ilyar_96" target="_blank" rel="noreferrer">
						Telegram
					</a>
				</li>
				<li>
					<a
						href="mailto:kasyymov.ilyar@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						Email
					</a>
				</li>
				<li>
					<a href="https://iljar96.ru/" target="_blank" rel="noreferrer">
						Портфолио
					</a>
				</li>
				<li>
					<a href="https://github.com/Ilyar96" target="_blank" rel="noreferrer">
						Github
					</a>
				</li>
			</ul>
		</Container>
	);
};
