import {
	Analytics,
	Balances,
	Checkout,
	Dashboard,
	Exchange,
	Marketing,
	PaymentLinks,
	Transactions,
	Wire,
} from '../pages';

export const mainRoutes = [
	{
		id: '1',
		title: 'Dashboard',
		component: Dashboard,
		path: '/',
	},
	{
		id: '2',
		title: 'Balances',
		component: Balances,
		path: 'balance',
	},
	{
		id: '3',
		title: 'Transactions',
		component: Transactions,
		path: 'transaction',
	},
	{
		id: '4',
		title: 'Analytics',
		component: Analytics,
		path: 'announcement',
	},
	{
		id: '5',
		title: 'Marketing',
		component: Marketing,
		path: 'marketing',
	},
	{
		id: '6',
		title: 'Exchange rates',
		component: Exchange,
		path: 'exchange-rates',
	},

	{
		id: '7',
		title: 'Checkout',
		component: Checkout,
		path: 'checkout',
	},
	{
		id: '8',
		title: 'Payment links',
		component: PaymentLinks,
		path: 'payment-links',
	},

	{
		id: '9',
		title: 'Wire',
		component: Wire,
		path: 'wire',
	},
];
