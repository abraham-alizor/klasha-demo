import Typography from '../../components/Typography';
import { chartData } from '../../data/chartData';
import AnalyticsWidget from '../../components/UI/analytics-widget';
import { analyticsDataTypes } from '../../types';
import MainChart from '../../components/UI/mainChart';
import Button from '../../components/button';
import { ARROW_DOWN, CHEVRON_DOWN } from '../../assets';
import { Fade } from 'react-reveal';

function Dashboard() {
	const analyticsData: analyticsDataTypes[] = [
		{
			dateRange: null,
			data: chartData,
			bgColor: 'bg-[#FFFFF]',
			textColor: 'text-black',
		},
		{
			dateRange: '24 Aug - 01 Sep 21',
			data: chartData,
			bgColor: 'bg-[#000000]',
			textColor: 'text-white',
		},
		{
			dateRange: '24 Aug - 01 Sep 21',
			data: chartData,
			bgColor: 'bg-[#FFFFF]',
			textColor: 'text-black',
		},
		{
			dateRange: '24 Aug - 01 Sep 21',
			data: chartData,
			bgColor: 'bg-[#FFFFF]',
			textColor: 'text-black',
		},
	];
	return (
		<div className='w-full px-8 pt-12 pb-20 lg:pb-8'>
			<Typography textStyle='text-[20px] font-medium'>Sales overview</Typography>

			<AnalyticsWidget data={analyticsData} />

			<div className='mt-8 lg:flex justify-between items-end'>
				<div className=' w-full lg:w-[70%] mb-2 lg:mb-0'>
					<div className='flex flex-row flex-wrap justify-between items-center mb-1'>
						<Typography variant='label' textStyle=' px-2 border-r border-gray-200 mb-2 lg:mb-0'>
							Sales
						</Typography>
						<Typography variant='label' textStyle=' px-2 text-[#EF2C5A] mb-2 lg:mb-0'>
							7 days
						</Typography>
						<Typography variant='label' textStyle='mb-2 lg:mb-0'>
							30 days
						</Typography>

						<Button
							title={'USD'}
							icons={CHEVRON_DOWN}
							onClick={() => {}}
							bgColor={'bg-white'}
							textColor={'text-black'}
							className={'border border-black mb-2 lg:mb-0'}
						/>
						<select className='text-xs text-gray-500 border border-gray-200 rounded-lg outline-none py-2 px-3 w-28  lg:w-[25%] mb-2 lg:mb-0'>
							<option>Email</option>
						</select>
						<Button
							title={'Download report'}
							icons={ARROW_DOWN}
							onClick={() => {}}
							bgColor={'bg-white'}
							textColor={'text-black'}
							className={'border border-black mb-2 lg:mb-0'}
						/>
					</div>
					<div className='border border-black rounded-lg p-4'>
						<MainChart data={chartData} />
					</div>
				</div>
				<Fade bottom>
					<div className='w-full lg:w-[25%] mb-2 lg:mb-0'>
						<div className='bg-rectangle transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110  h-[250px] rounded-lg p-6 flex flex-col justify-between items-start'>
							<Typography variant='label' textStyle='text-white'>
								KlashaWire - send money to businesses globally from Africa
							</Typography>

							<Button
								title={'Send a Wire'}
								onClick={() => {}}
								bgColor={'bg-black'}
								hoverColor={'hover:bg-white'}
								textColor={'text-white'}
								className={'hover:text-black'}
							/>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default Dashboard;
