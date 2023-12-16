import React from 'react';
import { Grid } from '@mui/material';

import Header from '../components/Header/Header.component';
import TableContainer from '../components/RolesTableContainer/RolesTableContainer.component';

const RolesCreatorPage = () => {
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

export default RolesCreatorPage;
