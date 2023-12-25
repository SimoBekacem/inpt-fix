import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import TableBody from '../components/TableBodys/TableBody.component.js';

import { tableHeaderLabels, rows } from '../constants/receptionTableLabels.js';
const ManagerPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TableBody tableHeaderLabels={tableHeaderLabels} rows={rows} />
			</Grid>
		</Grid>
	);
};

export default ManagerPage;
