import React from 'react';
import { Paper, Grid, TextField } from '@mui/material';
import {
	profileFormLabels,
	profileDropDownLables,
} from '../../constants/ProfileFormLabels';

import ProfileFormDropdown from '../ProfileFormDropdonw/ProfileFormDropdonw.compoenent';

// greedy gost
const ProfileForm = () => {
	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '90vh',
			}}
		>
			<Grid
				container
				spacing={3}
				sx={{
					width: '70%',
					padding: '2rem 3rem 3rem 2rem',
					boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
					borderRadius: '2rem',
				}}
			>
				{profileFormLabels.map((label) => {
					return (
						<Grid item xs={4}>
							<TextField
								sx={{ minWidth: 170 }}
								id='outlined-basic'
								label={label}
								variant='outlined'
							/>
						</Grid>
					);
				})}
				{profileDropDownLables.map((label) => {
					return (
						<Grid item xs={4}>
							<ProfileFormDropdown label={label} />
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default ProfileForm;
