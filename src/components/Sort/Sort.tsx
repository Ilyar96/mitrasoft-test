import React, { FC } from "react";
import { Dropdown } from "react-bootstrap";

import { useActions } from "../../hooks";
import { useAppSelector } from "../../redux/store";
import {
	selectPostsSortBy,
	selectPostsSortOrder,
} from "../../redux/slices/posts/selectors";
import { SortBy, Order } from "../../redux/slices/posts/types";

import "./Sort.scss";
import { SortItem } from "../../types/post";

const sortItems: SortItem[] = [
	{ sortBy: SortBy.DEFAULT, order: 1, label: "умолчанию" },
	{ sortBy: SortBy.TITLE, order: -1, label: "названию (A-Z)" },
	{ sortBy: SortBy.TITLE, order: 1, label: "названию (Z-A)" },
];

export const Sort: FC = () => {
	const { setSort, setPage } = useActions();
	const sortBy = useAppSelector(selectPostsSortBy);
	const sortOrder = useAppSelector(selectPostsSortOrder);

	const activeSortItem =
		sortItems.find(
			(item) => item.sortBy === sortBy && item.order === sortOrder
		) || sortItems[0];

	const sortChangeHandler = (sortBy: SortBy, order: Order) => () => {
		setSort({ order, sortBy });
		setPage(1);
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary">
				Сортировка по: {activeSortItem.label}
			</Dropdown.Toggle>

			<Dropdown.Menu className="sort-options">
				{sortItems.map(({ label, order, sortBy }, index) => (
					<Dropdown.Item onClick={sortChangeHandler(sortBy, order)} key={label}>
						{label}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
