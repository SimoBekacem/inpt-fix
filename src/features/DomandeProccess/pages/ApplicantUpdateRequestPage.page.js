import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';

//?: here we have the forms ready to go :
import UpdateForm from '../components/UpdateForm/UpdateForm.component';

const ApplicantUpdateRequestPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<UpdateForm />
			</Grid>
		</Grid>
	);
};

export default ApplicantUpdateRequestPage;
