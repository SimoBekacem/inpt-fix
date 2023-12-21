import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';

//?: here we have the forms ready to go :
// import CreationFormBody from '../components/FormBodys/CreationFormBody/CreationFormBody.component';
// import ReceptionFormBody from '../components/FormBodys/ReceptionFormBody/ReceptionFormBody.component';
import DiagnosticFormBody from '../components/FormBodys/DiagnosticFormBody/DiagnosticFormBody.component';
// import SparePartsFormBody from '../components/FormBodys/SparePartsFormBody/SparePartsFormBody.component';
//?: here we have the tables ready to go :
import TableBody from '../components/TableBodys/TableBody.component.js';
// import ReceptionTableBody from '../components/TableBodys/ReceptionTableBody/ReceptionTableBody.component.js';
//?: here we have the labels of the tables :
// import { tableHeaderLabels, rows } from '../constants/applicantTableLabels.js';
// import { tableHeaderLabels, rows } from '../constants/receptionTableLabels.js';
// import { tableHeaderLabels, rows } from '../constants/technitianTableLabels.js';
import { tableHeaderLabels, rows } from '../constants/sparePartsTableLabels.js';

const DomandeCreatoPage = () => {
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

export default DomandeCreatoPage;
