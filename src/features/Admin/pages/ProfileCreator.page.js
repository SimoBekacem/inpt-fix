import React from 'react';
import { Grid } from '@mui/material';

import Header from '../components/Header/Header.component';

import TableContainer from '../components/ProfileTableContainer/ProfileTableContainer.component';

const ProfileCreatoPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TableContainer />
			</Grid>
		</Grid>
	);
};

export default ProfileCreatoPage;
