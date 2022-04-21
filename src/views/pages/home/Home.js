import React, { useContext, useEffect, useState } from 'react';
import SeriesService from '../../../services/SeriesService';
import { AppContext } from 'context/provider';
import Series from '../series/Series';
import Pagination from 'components/Pagination/Pagination';

export default function Home() {

	const {
		setLoading,
	} = useContext(AppContext);

	const [series, setSeries] = useState(['asd', 'asd_1', 'asd_2', 'asd_3', 'asd_4', 'asd_5']);
	const [currentPage, setCurrentPage] = useState(1);
	const [seriesPerPage, setSeriesPerPage] = useState(5);

	const indexOfLastSeries = currentPage * seriesPerPage;
	const indexOfFirstPost = indexOfLastSeries - seriesPerPage;
	const currentSeries = series.slice(indexOfFirstPost, indexOfLastSeries);

	useEffect(() => {
		setLoading(true);
		SeriesService.getTVSeries()
			.then(res => {
				//setSeries(res.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	function changePage(number) {
		setCurrentPage(number);
	}

	return (
		<div className='container'>
			<h1 className='h2 text--center text--secondary pt-5 xxs-offset-bottom-5'>Series List</h1>
			<Series onSeries={currentSeries} />
			<Pagination
				onSeriesPerPage={seriesPerPage}
				onTotalSeries={series.length}
				onChangePage={(number) => changePage(number)}
			/>
		</div>
	)
}
