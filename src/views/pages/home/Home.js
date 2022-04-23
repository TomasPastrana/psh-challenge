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

	const [series, setSeries] = useState([{id: 0, value: 'as'}, {id: 1, value: 'b 1'}, {id: 2, value: 'a 2'}, {id: 3, value: 'z 3'}, {id: 4, value: 'j 4'}, {id: 5, value: 'd 5'}]);
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
				/* let fixedData = [];
				res.data.map((d, i) => {
					fixedData.push({id: i, value: d.replaceAll('_', ' ').toUpperCase()});
				});
				setSeries(fixedData);
				setFiltered(fixedData); */
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
		const filtered = [{ id: 'all', value: filterAll }];

		setFilterAll(filterAll);
		setFiltered(filtered);
	}

	function searchSeries() {
		const result = matchSorter(series, filterAll, {
			keys: [filterAll === '' ? 'id' : 'value'], threshold: matchSorter.rankings.WORD_STARTS_WITH
		});
		console.log(result);
		setFiltered(result);
	}

	function sortSeries() {
		setFilterAll('');
		if (!sorted) {
			setFiltered(sortAlphabeticaly(series, 'value'));
		} else {
			setFiltered(sortAlphabeticaly(series, 'id'));
		}
		setSorted(!sorted);
	}

	return (
		<div className='container'>
			<h1 className='h2 text--center text--secondary pt-5 xxs-offset-bottom-2'>Series List</h1>
			<p className='text--center text--primary text--title2 xxs-offset-bottom-5'>
				Here you'll find a list of selectable series to show super duper famous quotes
			</p>
			<div className='d-flex justify-content-end xxs-offset-bottom-3'>
				<button className='btn btn--primary'>+ Add</button>
			</div>
			<div className='d-flex justify-content-between xxs-offset-bottom-5'>
				<input className="form-control col-xl-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={filterAll} onChange={filterAllData} />
				<button className='btn btn--secondary' onClick={sortSeries}>{sorted ? 'Reset order' : 'Sort Alphabeticaly'}</button>
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
