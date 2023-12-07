import { Grid } from '@mui/material';
import React from 'react';

import Header from '../components/Header/Header.component';
import Title from '../components/Title/Title.componen';
import Caracter_1 from '../components/Caracter_1/Caracter_1.component';

const Landing_page = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={7}>
				<Title />
			</Grid>
			<Grid item xs={5}>
				<Caracter_1 />
			</Grid>
		</Grid>
	);
};

export default Landing_page;
