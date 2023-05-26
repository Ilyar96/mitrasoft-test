import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import cn from "classnames";

import { useActions } from "../../hooks";

import "./Search.scss";

export interface SearchProps {
	className?: string;
}

export const Search: FC<SearchProps> = ({ className }) => {
	const [searchValue, setSearchValue] = useState("");
	const { setSearch } = useActions();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch(searchValue);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const onClear = () => {
		setSearchValue("");
		setSearch("");
	};

	return (
		<Form className={cn("search-wrapper", className)} onSubmit={onSubmit}>
			<InputGroup className="search-input-group">
				<Form.Control
					className="pe-5"
					value={searchValue}
					onChange={onChange}
					placeholder="Поиск по названию статьи"
					aria-label="Поиск по названию статьи"
					aria-describedby="search-post"
				/>

				{searchValue && (
					<Button
						className="search-clear"
						variant="link"
						type="button"
						onClick={onClear}
					>
						<span className="visually-hidden">Очистить поле поиска</span>
						&#10006;
					</Button>
				)}

				<Button variant="primary" type="submit">
					Поиск
				</Button>
			</InputGroup>
		</Form>
	);
};
