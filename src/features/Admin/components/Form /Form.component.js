import React from 'react';
import { Paper, Grid, TextField } from '@mui/material';

import DataFromDropdown from '../FormDropdonw/Dropdonw.compoenent';

const DataFrom = ({ DataFromLabels, profileDropDownLables }) => {
	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			elevation={0}
		>
			<Grid
				container
				spacing={3}
				sx={{
					width: '80%',
					padding: '2rem 3rem 3rem 2rem',
					boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
					borderRadius: '2rem',
				}}
			>
				{DataFromLabels.map((label) => {
					return (
						<Grid item xs={4}>
							<TextField
								id='outlined-basic'
								label={label}
								variant='outlined'
								size='large'
								sx={{
									minWidth: '5rem',
								}}
							/>
						</Grid>
					);
				})}
				{profileDropDownLables.map((label) => {
					return (
						<Grid item xs={4}>
							<DataFromDropdown label={label} />
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default DataFrom;
