import React, { useContext, useEffect, useState } from 'react';
import SeriesService from '../../../services/SeriesService';
import { AppContext } from 'context/provider';
import Series from '../series/Series';
import Pagination from 'components/Pagination/Pagination';
import { sortAlphabeticaly } from 'components/shared/global';
import { matchSorter } from 'match-sorter';

export default function Home() {

	const {
		setLoading,
	} = useContext(AppContext);

	const [series, setSeries] = useState(['as', 'b_1', 'a_2', 'z_3', 'j_4', 'd_5']);
	const [currentPage, setCurrentPage] = useState(1);
	const [seriesPerPage] = useState(5);
	const [sorted, setSorted] = useState(false);
	const [filterAll, setFilterAll] = useState('');
	const [filtered, setFiltered] = useState([]);

	const indexOfLastSeries = currentPage * seriesPerPage;
	const indexOfFirstSeries = indexOfLastSeries - seriesPerPage;
	const currentSeries = filtered.slice(indexOfFirstSeries, indexOfLastSeries);

	useEffect(() => {
		setLoading(true);
		SeriesService.getTVSeries()
			.then(res => {
				//setSeries(res.data);
				//setUnsortedSeries(res.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	useEffect(() => {
		searchSeries();
	}, [filterAll])

	function filterAllData(e) {
		const { value } = e.target;

		const filterAll = value;
		const filtered = [filterAll];

		setFilterAll(filterAll);
		setFiltered(filtered);
	}

	function searchSeries() {
		const result = matchSorter(series, filterAll);
		setFiltered(result);
	}

	function sortSeries() {
		if (!sorted) {
			setSeries(sortAlphabeticaly(filtered));
		} else {
			//setSeries(series);
		}
		setSorted(!sorted);
	}

	return (
		<div className='container'>
			<h1 className='h2 text--center text--secondary pt-5 xxs-offset-bottom-2'>Series List</h1>
			<p className='text--center text--primary text--title2 xxs-offset-bottom-5'>
				Here you'll find a list of selectable series to show super duper famous quotes
			</p>
			<div className='d-flex justify-content-between xxs-offset-bottom-2'>
				<button className='btn btn--secondary' onClick={sortSeries}>{sorted ? 'Reset order' : 'Sort Alphabeticaly'}</button>
				<button className='btn btn--primary'>+ Add</button>
			</div>
			<div className='d-flex xxs-offset-bottom-5'>
				<input className="form-control col-xl-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={filterAllData} />
			</div>
			<Series onSeries={currentSeries} />
			<Pagination
				onSeriesPerPage={seriesPerPage}
				onTotalSeries={filtered.length}
				onChangePage={(number) => setCurrentPage(number)}
			/>
		</div>
	)
}
