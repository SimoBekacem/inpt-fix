import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import CreationFormBody from '../components/FormBodys/CreationFormBody/CreationFormBody.component';

import { tableHeaderLabels, rows } from '../constants/applicantTableLabels.js';

const ApplicantPage = () => {
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