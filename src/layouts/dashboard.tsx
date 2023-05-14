import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks';
import { Sidebar } from '../components/sidebar';
import Header from '../components/sidebar/Header';

interface LayoutProps {
	children: JSX.Element;
}

export const DashboardLayout = (props: LayoutProps) => {
	const isMobileView = useMediaQuery('(max-width: 640px)');
	const isTabletView = useMediaQuery('(max-width: 840px)');
	const [isSideNavVisible, setSideNavVisible] = useState(true);

	useEffect(() => {
		if (isMobileView) {
			setSideNavVisible(false);
		} else {
			setSideNavVisible(true);
		}
	}, [isMobileView]);

	return (
		<div className='lg:flex h-screen w-full overflow-hidden'>
			{isMobileView || isTabletView ? (
				<div
					onClick={() => setSideNavVisible(false)}
					className={`fixed top-0 left-0 bottom-0 w-full bg-gray-800/60 z-20 ${
						isSideNavVisible ? '' : 'hidden'
					}`}
				></div>
			) : null}
			<Sidebar {...{ open: isSideNavVisible, onClose: () => setSideNavVisible(false) }} />
			<div className='flex-1 lg:w-[80%]'>
				<div className=''>
					<Header {...{ onMenu: () => setSideNavVisible(true) }} />
				</div>
				<div className=' lg:pb-20 overflow-auto [@media(max-width:767px)]:scrollbar-hide h-screen'>
					{props.children}
				</div>
			</div>
		</div>
	);
};
