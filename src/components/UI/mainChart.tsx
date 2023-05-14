import React from 'react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Zoom } from 'react-reveal';

export interface MainChartTypes {
	data: {
		name: string;
		uv: number;
	}[];
}
function MainChart({ data }: MainChartTypes) {
	return (
		<Zoom>
			<div style={{ width: '100%', height: 220 }}>
				<ResponsiveContainer>
					<AreaChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#EF2C5A' stopOpacity={0.4} />
								<stop offset='95%' stopColor='#EF2C5A' stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey='name' fontSize={12} fontFamily='Inter' />
						<YAxis fontSize={12} fontFamily='Inter' axisLine={false} />
						<CartesianGrid strokeDasharray='3 0' vertical={false} />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='uv'
							stroke='#EF2C5A'
							fillOpacity={1}
							fill='url(#colorUv)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</Zoom>
	);
}

export default MainChart;
