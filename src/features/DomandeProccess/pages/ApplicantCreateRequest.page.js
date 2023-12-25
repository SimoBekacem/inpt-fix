import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';

//?: here we have the forms ready to go :
import CreationFormBody from '../components/FormBodys/CreationFormBody/CreationFormBody.component';
// import ReceptionFormBody from '../components/FormBodys/ReceptionFormBody/ReceptionFormBody.component';
// import DiagnosticFormBody from '../components/FormBodys/DiagnosticFormBody/DiagnosticFormBody.component';
// import SparePartsFormBody from '../components/FormBodys/SparePartsFormBody/SparePartsFormBody.component';

const ApplicantCreateRequestPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<CreationFormBody />
			</Grid>
		</Grid>
	);
};

export default ApplicantCreateRequestPage;
