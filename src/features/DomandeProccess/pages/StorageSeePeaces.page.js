import React from 'react';
import { Grid } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';

//?: here we have the forms ready to go :
import ReadForm from '../components/Forms/ReadForm/ReadForm.component';
import SparePartsFormBody from '../components/FormBodys/SparePartsFormBody/SparePartsFormBody.component';
const StorageSeePeacesPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<ReadForm />
			</Grid>
			<Grid item xs={12}>
				<SparePartsFormBody />
			</Grid>
		</Grid>
	);
};

export default StorageSeePeacesPage;
