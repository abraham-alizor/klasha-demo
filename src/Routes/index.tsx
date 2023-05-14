import React from 'react';
import { DashboardLayout } from '../layouts/dashboard';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from '../data/mainRouteData';

function MainRoutes() {
	return (
		<div>
			<DashboardLayout>
				<Routes>
					{mainRoutes.map((item, index) => (
						<Route key={index} path={item.path} element={<item.component />} />
					))}
				</Routes>
			</DashboardLayout>
		</div>
	);
}

export default MainRoutes;
