import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function Pagination(props) {

	const pageNumbers = [];
	const [currentPage, setCurrentPage] = useState(1);

	for (let i = 1; i <= Math.ceil(props.onTotalSeries / props.onSeriesPerPage); i++) {
		pageNumbers.push(i);
	}

	function handleChange(number) {
		setCurrentPage(number);
		props.onChangePage(number);
	}

	return (
		<nav>
			<ul className="pagination mt-4 pb-4 justify-content-end">
				{pageNumbers.at(-1) < 10 ?
					pageNumbers.map(number => {
						return (
							<li key={number} className="page-item">
								<a href="#" className="page-link" onClick={() => props.onChangePage(number)}>
									{number}
								</a>
							</li>
						)
					})
					:
					<>
						{/* Always print first button */}
						<li key={1} className="page-item">
							<a href="#" className="page-link" onClick={() => handleChange(1)}>1</a>
						</li>
						{/* Print "..." only if currentPage is > 3 */}
						{currentPage > 3 &&
							<li key={'threeDots1'} className="page-item">
								<div className="page-link">...</div>
							</li>
						}
						{/* special case where last page is selected... */}
						{currentPage === pageNumbers.at(-1) &&
							<li key={currentPage - 2} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(currentPage - 2)}>{currentPage - 2}</a>
							</li>
						}
						{/* Print previous number button if currentPage > 2 */}
						{currentPage > 2 &&
							<li key={currentPage - 1} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(currentPage - 1)}>{currentPage - 1}</a>
							</li>
						}
						{/* Print current page number button as long as it not the first or last page */}
						{currentPage !== 1 && currentPage !== pageNumbers.at(-1) &&
							<li key={currentPage} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(currentPage)}>{currentPage}</a>
							</li>
						}
						{/* print next number button if currentPage < lastPage - 1 */}
						{currentPage < pageNumbers.at(-1) - 1 &&
							<li key={currentPage + 1} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(currentPage + 1)}>{currentPage + 1}</a>
							</li>
						}
						{/* special case where first page is selected... */} {/* check this */}
						{currentPage === 1 &&
							<li key={currentPage + 2} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(currentPage + 2)}>{currentPage + 2}</a>
							</li>
						}
						{/* print "..." if currentPage is < lastPage -2 */}
						{currentPage < pageNumbers.at(-1) - 2 &&
							<li key={'threeDots2'} className="page-item">
								<div className="page-link">...</div>
							</li>
						}
						{/* Always print last page button if there is more than 1 page */}
						{pageNumbers.at(-1) > 1 &&
							<li key={pageNumbers.at(-1)} className="page-item">
								<a href="#" className="page-link" onClick={() => handleChange(pageNumbers.at(-1))}>{pageNumbers.at(-1)}</a>
							</li>
						}
					</>
				}
			</ul>
		</nav>
	)
}

Pagination.propTypes = {
	onTotalSeries: PropTypes.number,
	onSeriesPerPage: PropTypes.number,
	onChangePage: PropTypes.func,
};
