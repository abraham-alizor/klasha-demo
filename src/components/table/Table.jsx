import React, { useEffect, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import './table.css';
import { GlobalFilter } from './filter/GlobalFilter';
import Button from '../button';
import { FILTER } from '../../assets';
import { Zoom } from 'react-reveal';

export const TableComponent = ({
	COLUMNS,
	DATA,
	TITLE,
	setSize,
	size,
	setPage,
	setPageIndex,
	className,
}) => {
	const columns = useMemo(() => COLUMNS, [COLUMNS]);
	const data = useMemo(() => DATA, [DATA]);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canPreviousPage,
		canNextPage,
		pageOptions,
		state,
		setGlobalFilter,
		gotoPage,
		// pageCount,
		prepareRow,
		setPageSize,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0, pageSize: 5 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex, pageSize } = state;

	useEffect(() => {
		setSize(pageSize);
		setPageIndex(pageIndex);
	}, [pageIndex, pageSize, setSize, setPageIndex]);

	return (
		<>
			<Zoom>
				<div className='lg:flex justify-between items-center  w-full border border-[#F0F0F0] my-2 pt-2 px-4'>
					<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

					<div className='flex justify-start lg:justify-end items-center lg:items-start mb-1'>
						<Button
							icons={FILTER}
							title='Filter'
							className='border border-black rounded-lg flex-row-reverse'
							iconClassName='ml-4'
						/>
						<Button title='Export' className='border border-black rounded-lg ml-4' />
					</div>
				</div>
				<div className='w-full overflow-scroll bg-transparent'>
					<div className={`w-full overflow-scroll text-sm lg:rounded-t-3xl ${className}`}>
						<p className='font-semibold text-sm  px-4 '>{TITLE}</p>
						{/* <hr /> */}

						<table className='w-full table  px-8' {...getTableProps()}>
							<thead className='w-full '>
								{headerGroups.map((headerGroup) => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map((column) => (
											<th
												{...column.getHeaderProps(column.getSortByToggleProps())}
												className=' whitespace-nowrap text-left pl-6 pr-3 pt-3 text-sm font-semibold'
											>
												{column.render('Header')}
												<span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()} className='px-8'>
								{page.map((row) => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td className='pl-6 pr-3 py-4 border-0  text-xs' {...cell.getCellProps()}>
														{cell.render('Cell')}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>

					<div className='flex justify-end items-center w-full px-2 lg:px-4 py-2'>
						<div className='flex justify-center items-center text-xs border rounded-sm py-1 border-[#F0F0F0] w-full lg:w-[50%]'>
							<button className='pl-4' onClick={() => previousPage()} disabled={!canPreviousPage}>
								{'<'}
							</button>

							<span className='pl-4 text-xs'>
								Page{' '}
								<strong>
									{pageIndex + 1} of {pageOptions.length}
								</strong>{' '}
							</span>
							<span className='pl-4'>
								| Go to page:{' '}
								<input
									type='number'
									defaultValue={pageIndex + 1}
									onChange={(e) => {
										const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
										gotoPage(pageNumber);
									}}
									className='bg-transparent py-0 text-xs lg:rounded-l-md outline-none border border-gray-100 pl-2'
									style={{ width: '50px' }}
								/>
							</span>
							<button className='' onClick={() => nextPage()} disabled={!canNextPage}>
								{'>'}
							</button>
							<select
								className=' bg-transparent py-0 text-xs lg:rounded-r-md outline-0 focus:border-0 focus:border-black'
								value={pageSize}
								onChange={(e) => setPageSize(Number(e.target.value))}
							>
								{[5, 15, 30].map((pageSize) => (
									<option key={pageSize} value={pageSize}>
										Show {pageSize}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</Zoom>
		</>
	);
};
