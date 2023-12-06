import { Grid } from '@mui/material';
import React from 'react';

import Header from '../components/Header/Header.component';

const Landing_page = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
		</Grid>
	);
};

export default Landing_page;
