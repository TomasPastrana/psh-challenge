import React, { useContext, useEffect, useState } from 'react';
import SeriesService from '../../../services/SeriesService';
import { AppContext } from 'context/provider';

export default function Home() {

	const {
		setLoading,
	} = useContext(AppContext); //eslint-disable-line

	const [series, setSeries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [seriesPerPage, setSeriesPerPage] = useState(5);

	useEffect(() => {
		setLoading(true);
		SeriesService.getTVSeries()
			.then(res => {
				setSeries(res.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	function listSeries() {
		if (series.length > 0) {
			return(
				series.map((s, index) => {
					return(
						<p key={index}>{s}</p>
					)
				})
			)
		}
	}

	return(
		<div className='container'>
			<h1>Home</h1>
			{listSeries()}
		</div>
	)
}
