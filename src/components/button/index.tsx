import React from 'react';
import { buttonPropTypes } from '../../types';

function Button(props: buttonPropTypes) {
	return (
		<div>
			<button
				onClick={props.onClick}
				className={`transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 py-2 px-3 flex justify-center items-center rounded-[10px] ${props.bgColor}  ${props.hoverColor} ${props.textColor} duration-300 text-xs ${props.className}`}
			>
				{props.icons && (
					<img src={props.icons} alt={props.icons} className={`h-4  mr-4 ${props.iconClassName}`} />
				)}
				{props.title}
			</button>
		</div>
	);
}

export default Button;
