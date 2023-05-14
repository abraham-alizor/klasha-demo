import { AiOutlineMenu } from 'react-icons/ai';
import { CHEVRON_DOWN, USER_ICON } from '../../assets';
import Typography from '../Typography';
import { Link } from 'react-router-dom';

interface header {
	onMenu?: any;
	handleShowFilter?: any;
}

function Header(props: header) {
	return (
		<div>
			<div className='h-16 lg:h-12 flex justify-between bg-white border-b border-b-[#EDEDED] items-center flex-row w-full px-4 lg:px-8 lg:py-8'>
				<div className='flex lg:flex-1 items-center gap-x-5 mr-3'></div>
				<div className='flex flex-1 lg:flex-none shrink-0 gap-x-3 items-center h-full justify-end lg:justify-start '>
					<Link
						to='/'
						className={`transition ease-in-out delay-150 py-2 px-3 w-16 flex justify-between items-center  hover:-translate-y-1 hover:scale-110  duration-300 text-xs `}
					>
						<img src={USER_ICON} alt='user' className='w-7 h-7' />
						<img src={CHEVRON_DOWN} alt='user' className='w-4 h-4' />
					</Link>
					<Link
						to='/'
						className={`transition ease-in-out delay-150 py-2 px-3 w-16 flex justify-between items-center  hover:-translate-y-1 hover:scale-110  duration-300 text-xs `}
					>
						<Typography textStyle='text-[14px]'>En</Typography>
						<img src={CHEVRON_DOWN} alt='user' className='w-4 h-4' />
					</Link>
				</div>
				<div className='lg:hidden'>
					<AiOutlineMenu onClick={props.onMenu} className='h-10 text-4xl' />
				</div>
			</div>
		</div>
	);
}

export default Header;
