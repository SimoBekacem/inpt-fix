import { Stack } from '@mui/material';
import React from 'react';

const Caracter_1 = () => {
	return (
		<Stack justifyContent={'center'} alignItems={'center'} height={'80vh'}>
			<img
				src={require('../../../../assets/caracter1.png')}
				height={'100%'}
			/>
		</Stack>
	);
};

export default Caracter_1;
