import { Grid } from '@mui/material';
import React from 'react';

import Header from '../components/Header/Header.component';
import View1 from '../components/View1/View1.component';
import View2 from '../components/View2/View2.component';
import Footer from '../components/Footer/Footer.component';

const LandingPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<View1 />
			</Grid>
			<Grid item xs={12}>
				<View2 />
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default LandingPage;
