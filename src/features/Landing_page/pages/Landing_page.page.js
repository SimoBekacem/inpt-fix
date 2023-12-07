import { Grid } from '@mui/material';
import React from 'react';

import Header from '../components/Header/Header.component';
import Title from '../components/Title/Title.componen';
import Caracter from '../components/Caracter/Caracter.component';
import LoginSignup from '../components/LoginSignup/LoginSignup.component';
import Description from '../components/Descreption/Descreption.component';

const caracterImage1 = require('../../../assets/caracter1.png');
const caracterImage2 = require('../../../assets/caracter2.png');

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
				<Caracter image={caracterImage1} />
			</Grid>
			<Grid item xs={12}>
				<LoginSignup />
			</Grid>
			<Grid item xs={6}>
				<Caracter image={caracterImage2} />
			</Grid>
			<Grid item xs={6}>
				<Description />
			</Grid>
		</Grid>
	);
};

export default Landing_page;
