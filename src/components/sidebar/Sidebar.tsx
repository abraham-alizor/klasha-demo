import { Link } from 'react-router-dom';
import { acceptPayments, MainPages, sendPayments, SidebarDataTypes } from './SidebarData';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import Typography from '../Typography';
import { CHEVRON_LEFT, LOGO, QUESTION } from '../../assets';
import Button from '../button';

interface sidebarProps {
	open: boolean;
	onClose: () => void;
}

export const Sidebar = (props: sidebarProps) => {
	const location = useLocation();

	return (
		<Transition
			className={`flex-none h-full w-60 fixed lg:static z-30 bg-[#FFFBF7]`}
			as={'div'}
			show={props.open}
			enter='transition-all ease-in duration-1000'
			enterFrom='transform -translate-x-full'
			enterTo='transform -translate-x-0'
			leave='transition-all ease-out duration-1000'
			leaveFrom='transform -translate-x-0'
			leaveTo='transform -translate-x-full'
		>
			<div className='h-full bg-deep-surface  relative'>
				<div className='h-[10vh] w-20 ml-10'>
					<Link to='/'>
						<img src={LOGO} className='h-full w-full' alt='...logo' />
					</Link>
				</div>

				<div className='flex flex-col justify-between h-[90vh] pb-10 pl-5'>
					<div className=''>
						<ul>
							<Typography variant='label' textStyle='text-[#8D8D8D] ml-5'>
								Main pages
							</Typography>
							<Tabs
								{...{
									data: MainPages,
									className: 'hover:font-medium',
									// onClose: props.onClose,
									active: (item: SidebarDataTypes) => location.pathname === item.path,
								}}
							/>
						</ul>
						<ul className='mt-4'>
							<Typography variant='label' textStyle='text-[#8D8D8D] ml-5'>
								Accept payment
							</Typography>
							<Tabs
								{...{
									className: 'hover:font-medium',
									data: acceptPayments,
									// onClose: props.onClose,
									active: (item: SidebarDataTypes) => location.pathname === item.path,
								}}
							/>
						</ul>
						<ul className='mt-4'>
							<Typography variant='label' textStyle='text-[#8D8D8D] ml-5'>
								Send payments
							</Typography>
							<Tabs
								{...{
									className: 'hover:font-medium',
									// onClose: props.onClose,
									data: sendPayments,
									active: (item: SidebarDataTypes) => location.pathname === item.path,
								}}
							/>
						</ul>
					</div>

					<div className='flex flex-col justify-start items-start pl-5'>
						<Button
							icons={QUESTION}
							title='Support'
							bgColor={'bg-[#EF2C5A]'}
							onClick={() => {}}
							hoverColor={''}
							textColor={'text-white'}
							className={'mb-2 rounded-[39px]'}
						/>
						<Button
							icons={CHEVRON_LEFT}
							iconClassName='h-[0.9rem] w-3'
							title='Hide panel'
							bgColor={'bg-transparent'}
							onClick={() => {}}
							hoverColor={''}
							textColor={'text-black'}
							className={'border border-black'}
						/>
					</div>
				</div>
			</div>
		</Transition>
	);
};

interface tabsProps {
	data: SidebarDataTypes[];
	active: any;
	className?: string;
	containerClassName?: string;
	// onClose: () => void;
}

const Tabs = ({ data, active, className, containerClassName }: tabsProps) => {
	return (
		<>
			{data.map((item) => (
				<li key={item.id} className={`${containerClassName}`}>
					<Link to={item.path} className='hover:text-black'>
						<div
							className={` flex  w-full items-center py-2 px-5 ${className} ${
								active(item) ? 'border-r-8 border-tertiary text-[#EF2C5A] font-medium' : ''
							}`}
						>
							{/* <div></div> */}
							<img
								src={active(item) ? item.image_active : item.imageURL}
								className='h-5  mr-4'
								alt={item.alt}
							/>
							<Typography variant='label'>{item.title}</Typography>
						</div>
					</Link>
				</li>
			))}
		</>
	);
};
