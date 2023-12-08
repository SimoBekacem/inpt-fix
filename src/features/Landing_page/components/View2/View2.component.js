import React from 'react';
import { Grid } from '@mui/material';

import LoginSignup from '../LoginSignup/LoginSignup.component';
import Description from '../Descreption/Descreption.component';
import Caracter from '../Caracter/Caracter.component';

const caracterImage2 = require('../../../../assets/caracter2.png');
const background1 = require('../../../../assets/background1.jpeg');
const View2 = () => {
	return (
		<Grid
			container
			justifyContent='space-around'
			sx={{
				backgroundImage: `url(${background1})`,
				backgroundRepeat: 'none',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<Grid item xs={12}>
				<LoginSignup />
			</Grid>
			<Grid
				item
				md={5}
				xs={12}
				sx={{
					display: {
						xs: 'none',
						sm: 'block',
					},
				}}
			>
				<Caracter image={caracterImage2} />
			</Grid>
			<Grid item md={7} xs={12}>
				<Description />
			</Grid>
		</Grid>
	);
};

export default View2;
