import {
	ANNOUNCEMENT_BLACK,
	ANNOUNCEMENT_RED,
	BARCHART_BLACK,
	BARCHART_RED,
	CART_BLACK,
	CART_RED,
	EXCHANGE_BLACK,
	EXCHANGE_RED,
	PAYMENT_LINK_BLACK,
	PAYMENT_LINK_RED,
	PIE_CHART_BLACK,
	PIE_CHART_RED,
	TRANSACTION_BLACK,
	TRANSACTION_HORIZONTAL_BLACK,
	TRANSACTION_HORIZONTAL_RED,
	TRANSACTION_RED,
	WALLET_BLACK,
	WALLET_RED,
} from '../../assets';

export const MainPages = [
	{
		id: '1',
		title: 'Dashboard',
		imageURL: PIE_CHART_BLACK,
		image_active: PIE_CHART_RED,
		alt: 'pie...',
		path: '/',
	},
	{
		id: '2',
		title: 'Balances',
		imageURL: WALLET_BLACK,
		image_active: WALLET_RED,
		alt: 'wallet...',
		path: '/balance',
	},
	{
		id: '3',
		title: 'Transactions',
		imageURL: TRANSACTION_BLACK,
		image_active: TRANSACTION_RED,
		alt: 'transaction...',
		path: '/transaction',
	},
	{
		id: '4',
		title: 'Analytics',
		imageURL: BARCHART_BLACK,
		image_active: BARCHART_RED,
		alt: 'barchart...',
		path: '/announcement',
	},
	{
		id: '5',
		title: 'Marketing',
		imageURL: ANNOUNCEMENT_BLACK,
		image_active: ANNOUNCEMENT_RED,
		alt: 'claim...',
		path: '/marketing',
	},
	{
		id: '6',
		title: 'Exchange rates',
		imageURL: EXCHANGE_BLACK,
		image_active: EXCHANGE_RED,
		alt: 'exchange...',
		path: '/exchange-rates',
	},
];
export interface SidebarDataTypes {
	id: string;
	title: string;
	imageURL?: string;
	image_active?: string;
	alt?: string;
	path: string;
}

export const acceptPayments = [
	{
		id: '1',
		title: 'Checkout',
		imageURL: CART_BLACK,
		image_active: CART_RED,
		alt: 'checkout...',
		path: '/checkout',
	},
	{
		id: '2',
		title: 'Payment links',
		imageURL: PAYMENT_LINK_BLACK,
		image_active: PAYMENT_LINK_RED,
		alt: 'payment...',
		path: '/payment-links',
	},
];
export const sendPayments = [
	{
		id: '1',
		title: 'Wire',
		imageURL: TRANSACTION_HORIZONTAL_BLACK,
		image_active: TRANSACTION_HORIZONTAL_RED,
		alt: 'wire..',
		path: '/wire',
	},
];
