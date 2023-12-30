import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import TableBodyManager from '../components/TableBodyManager/TableBodyManager.component.js';
import ReceptionForm from '../components/Forms/ReceptionForm/ReceptionForm.component.js';

import { tableHeaderLabels, rows } from '../constants/receptionTableLabels.js';
const ManagerPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TableBodyManager
					tableHeaderLabels={tableHeaderLabels}
					rows={rows}
				/>
			</Grid>
		</Grid>
	);
};

export default ManagerPage;
