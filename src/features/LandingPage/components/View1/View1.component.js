import React from 'react';
import { Grid } from '@mui/material';

import Title from '../Title/Title.component';
import Caracter from '../Caracter/Caracter.component';

const caracterImage1 = require('../../../../assets/caracter1.png');
const background2 = require('../../../../assets/background2.jpeg');
const View1 = () => {
	return (
		<Grid
			container
			justifyContent='space-around'
			sx={{
				backgroundImage: `url(${background2})`,
				backgroundRepeat: 'none',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<Grid item sm={7} xs={12}>
				<Title />
			</Grid>
			<Grid item sm={5} xs={12}>
				<Caracter image={caracterImage1} size={'100%'} isBig />
			</Grid>
		</Grid>
	);
};

export default View1;
