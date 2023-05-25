import { ChangeEvent, FC, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { useActions } from "../../hooks";

import "./Search.scss";

export const Search: FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const { setSearch } = useActions();

	const onSubmit = () => {
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
		<Form className="search-wrapper" onSubmit={onSubmit}>
			<InputGroup className="search-input-group">
				<Form.Control
					className="pe-5"
					value={searchValue}
					onChange={onChange}
					placeholder="Поиск по названию статьи"
					aria-label="Поиск по названию статьи"
					aria-describedby="search-post"
				/>

				<Button
					className="search-clear"
					variant="link"
					type="button"
					onClick={onClear}
				>
					<span className="visually-hidden">Очистить поле поиска</span>
					&#10006;
				</Button>

				<Button variant="primary" type="submit">
					Поиск
				</Button>
			</InputGroup>
		</Form>
	);
};
