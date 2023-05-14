import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Typography from '../Typography';
import { analyticsDataTypes } from '../../types';
import { Fade } from 'react-reveal';

interface widgetPropTypes {
	data: analyticsDataTypes[];
}

function AnalyticsWidget({ data }: widgetPropTypes) {
	return (
		<div>
			{' '}
			<div className='w-full lg:flex justify-between items-center flex-wrap '>
				{data.map((item: analyticsDataTypes, index: number) =>
					index === 0 || index === 1 ? (
						<Fade key={index} left>
							<div
								className={`lg:w-[23%] lg:min-h-[230px] mb-4 ${item.bgColor} p-6 border border-black rounded-lg`}
							>
								{item.dateRange && (
									<div className='w-full'>
										<small className={`${item.textColor}`}>{item.dateRange}</small>
										<div style={{ width: '100%', height: 100 }}>
											<ResponsiveContainer>
												<AreaChart
													width={730}
													height={250}
													data={item.data}
													margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
												>
													<defs>
														<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
															<stop offset='5%' stopColor='#EF2C5A' stopOpacity={0.4} />
															<stop offset='95%' stopColor='#EF2C5A' stopOpacity={0} />
														</linearGradient>
													</defs>

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
									</div>
								)}

								<Typography textStyle={`text-[14px] font-normal ${item.textColor} mt-2`}>
									Today's sales
								</Typography>
								<Typography textStyle={`text-[20px] font-medium ${item.textColor} mt-2`}>
									₦1,652.50
								</Typography>
							</div>
						</Fade>
					) : (
						<Fade key={index} right>
							<div
								className={`lg:w-[23%]  lg:min-h-[230px]  mb-4 ${item.bgColor} p-6 border border-black rounded-lg`}
							>
								{item.dateRange && (
									<div className='w-full'>
										<small className={`${item.textColor}`}>{item.dateRange}</small>
										<div style={{ width: '100%', height: 100 }}>
											<ResponsiveContainer>
												<AreaChart
													width={730}
													height={250}
													data={item.data}
													margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
												>
													<defs>
														<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
															<stop offset='5%' stopColor='#EF2C5A' stopOpacity={0.4} />
															<stop offset='95%' stopColor='#EF2C5A' stopOpacity={0} />
														</linearGradient>
													</defs>

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
									</div>
								)}

								<Typography textStyle={`text-[14px] font-normal ${item.textColor} mt-2`}>
									Today's sales
								</Typography>
								<Typography textStyle={`text-[20px] font-medium ${item.textColor} mt-2`}>
									₦1,652.50
								</Typography>
							</div>
						</Fade>
					)
				)}
			</div>
		</div>
	);
}

export default AnalyticsWidget;
