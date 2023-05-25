import { FC } from "react";
import { Spinner } from "react-bootstrap";
import cn from "classnames";

import "./Loader.scss";

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"loader-wrapper d-flex justify-content-center align-items-center",
				className
			)}
		>
			<Spinner animation="border" variant="primary">
				<span className="visually-hidden">Загрузка...</span>
			</Spinner>
		</div>
	);
};
