import React, { useState } from 'react';
import { TableComponent } from '../../components/table/Table';
import Typography from '../../components/Typography';
import { TRANSACTION_COLUMNS } from '../../components/table/columns';
import { transactionData } from '../../data/transactionData';

function Transactions() {
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(3);

	return (
		<div className='w-full px-8 pt-12 pb-20 lg:pb-8'>
			<div className='bg-white border rounded-xl '>
				<div className='bg-transparent  flex  justify-between items-center p-3'>
					<Typography textStyle=' text-base font-medium'>Transaction history</Typography>
				</div>

				<div className=' border-b  border-[#F0F0F0] rounded-b-xl'>
					{transactionData && (
						<TableComponent
							className='rounded-none rounded-t-0'
							DATA={transactionData}
							COLUMNS={TRANSACTION_COLUMNS}
							TITLE=''
							setPage={setPage}
							size={size}
							setSize={setSize}
							setPageIndex={(value: number) => page + 1}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Transactions;
