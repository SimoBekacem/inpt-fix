import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import TechnecianTableBody from '../components/TechnicianTableBody/TechnicianTableBody.component.js';

import { tableHeaderLabels, rows } from '../constants/technitianTableLabels.js';
const TechnicianPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TechnecianTableBody
					tableHeaderLabels={tableHeaderLabels}
					rows={rows}
				/>
			</Grid>
		</Grid>
	);
};

export default TechnicianPage;
