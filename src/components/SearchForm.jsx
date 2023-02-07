import React from "react";
import { SearchIcon } from "../icons/Icons";

const SearchForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onScroll={handleSubmit} className="search-form">
			<div className="position-relative">
				<button type="submit">
					<SearchIcon />
				</button>
				<input type="text" placeholder="Search" className="form-control" />
			</div>
		</form>
	);
};

export default SearchForm;
