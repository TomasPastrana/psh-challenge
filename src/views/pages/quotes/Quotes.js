import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "context/provider";
// services
import SeriesService from "../../../services/SeriesService";
import Pagination from "components/Pagination/Pagination";
import { sortAlphabeticaly } from "components/shared/global";

export default function Quotes() {

	const url = window.location.pathname;
	const seriesName = url.substring(url.indexOf('/', 0) + 1).split('/')[0];

	const {
		setLayoutType,
		setLoading,
	} = useContext(AppContext);

	const title = seriesName.replaceAll('_', ' ').toUpperCase() || 'Series';

	const [quotes, setQuotes] = useState([]);
	const [quotesPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [error, setError] = useState('');
	
	const indexOfLastSeries = currentPage * quotesPerPage;
	const indexOfFirstPost = indexOfLastSeries - quotesPerPage;
	const currentQuotes = quotes.slice(indexOfFirstPost, indexOfLastSeries);

	useEffect(() => {
		setLayoutType('psh-main-layout--default');
		setLoading(true);
		SeriesService.getQuotesBySeries(seriesName)
			.then(res => {
				setQuotes(sortAlphabeticaly(res.data, 'author'));
			})
			.catch(error => {
				console.log(error);
				setError(error.toString());
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="container">
			<h2 className="h4 text--primary pt-3">Famous <span className="text--secondary">{title}</span> Quotes</h2>
			<ul className="list-group">
				{currentQuotes?.map((q, i) => {
					return (
						<li key={i} className="list-group-item">
							{q.author && <strong>{`${q.author}: `}</strong>}
							<div>
								<span>{`Quote ${q.id} - `}</span>
								<span>{`${q.quote}`}</span>
							</div>
						</li>
					)
				})}
			</ul>
			<Pagination
				onSeriesPerPage={quotesPerPage}
				onTotalSeries={quotes.length}
				onChangePage={(number) => setCurrentPage(number)}
			/>
			<p className='text--center text--body4 text--color-valentine-red-800 py-5'>{error}</p>
		</div>
	)
}