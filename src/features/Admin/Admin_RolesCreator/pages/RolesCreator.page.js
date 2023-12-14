import React from 'react';
import { Grid } from '@mui/material';

import Header from '../../Admin_globale-components/Header/Header.component';
import TableContainer from '../components/TableContainer/TableContainer.component';

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
