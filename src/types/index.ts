export interface TypographyProps {
	children?: JSX.Element | string;
	variant?: 'h2' | 'h3' | 'h5' | 'h6' | 'body' | 'body_2' | 'caption' | 'label';
	textStyle?: string;
	color?: string;
}
export interface UserPayload {
	firstName?: string;
	lastName?: string;
	id?: string | number;
	photoUri?: string;
	phoneNumber?: string | null;
	email?: string;
}

export interface buttonPropTypes {
	onClick: () => void;
	bgColor: string;
	hoverColor?: string;
	textColor: string;
	className?: string;
	title: string;
	icons?: string;
	iconClassName?: string;
}

export interface analyticsDataTypes {
	dateRange: null | string;
	data: {
		name: string;
		uv: number;
	}[];
	bgColor: string;
	textColor: string;
}
