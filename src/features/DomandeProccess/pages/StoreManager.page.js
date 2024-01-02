import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import StorageTableBody from '../components/StorageTableBody/StorageTableBody.comonent.js';
import { tableHeaderLabels, rows } from '../constants/sparePartsTableLabels.js';
const StoreManagerPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<StorageTableBody
					tableHeaderLabels={tableHeaderLabels}
					rows={rows}
				/>
			</Grid>
		</Grid>
	);
};

export default StoreManagerPage;
