import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { AiOutlineSearch } from 'react-icons/ai';

export const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState(filter);
	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 1000);
	return (
		<span>
			<label htmlFor='search' className='relative'>
				<input
					style={{ borderWidth: 1 }}
					className=' border-[#F0F0F0] mb-2 outline-none  px-2 py-1 text-sm placeholder:text-xs rounded-lg'
					placeholder='search'
					value={value || ''}
					onChange={(e) => {
						setValue(e.target.value);
						onChange(e.target.value);
					}}
				/>
				<AiOutlineSearch className='absolute top-1 right-1' />
			</label>
		</span>
	);
};
