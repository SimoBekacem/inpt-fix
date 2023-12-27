import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';

//?: here we have the forms ready to go :
import CreationFormBody from '../components/FormBodys/CreationFormBody/CreationFormBody.component';

const ApplicantReadRequestPage = () => {
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

export default ApplicantReadRequestPage;
