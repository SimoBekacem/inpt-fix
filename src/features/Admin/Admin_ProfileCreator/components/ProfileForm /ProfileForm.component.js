import React from 'react';
import { Paper, Grid, TextField } from '@mui/material';
import {
	profileFormLabels,
	profileDropDownLables,
} from '../../constants/ProfileFormLabels';

import ProfileFormDropdown from '../ProfileFormDropdonw/ProfileFormDropdonw.compoenent';
import AddButton from '../AddButton/AddButton.component';

// greedy gost
const ProfileForm = () => {
	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
			}}
			elevation={0}
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
								id='outlined-basic'
								label={label}
								variant='outlined'
								size='large'
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
				<Grid item xs={12}>
					<AddButton label={'Add New User'} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default ProfileForm;
