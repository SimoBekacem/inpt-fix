import React from 'react';
import { Paper, Grid, TextField } from '@mui/material';

import DataFromDropdown from '../FormDropdonw/Dropdonw.compoenent';

const DataFrom = ({
	DataFromLabels,
	profileDropDownLables,
	navigateButton,
}) => {
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
					// // todo: here we have a problem that shows the add role button in the people form and add role form so fix it .
					return (
						<Grid item xs={4}>
							<DataFromDropdown
								label={label}
								navigateButton={navigateButton}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default DataFrom;
