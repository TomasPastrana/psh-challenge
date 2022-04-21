import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function Pagination(props) {

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(props.onTotalSeries / props.onSeriesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination mt-4 justify-content-end">
				{pageNumbers.map(number => {
					return (
						<li key={number} className="page-item">
							<a href="#" className="page-link" onClick={() => props.onChangePage(number)}>
								{number} 
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

Pagination.propTypes = {
	onTotalSeries: PropTypes.number,
	onSeriesPerPage: PropTypes.number,
	onChangePage: PropTypes.func,
};
