import React from 'react';
import { Grid } from '@mui/material';

import Title from '../Title/Title.componen';
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
			<Grid item xs={7}>
				<Title />
			</Grid>
			<Grid item xs={5}>
				<Caracter image={caracterImage1} size={'100%'} />
			</Grid>
		</Grid>
	);
};

export default View1;
