import React from 'react';
import { Grid } from '@mui/material';

import Header from '../components/Header/Header.component';
import FormBody from '../components/FormBody/FormBody.component';

const DomandeCreatoPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<FormBody />
			</Grid>
		</Grid>
	);
};

export default DomandeCreatoPage;
