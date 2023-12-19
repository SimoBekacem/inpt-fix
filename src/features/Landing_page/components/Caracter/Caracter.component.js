import { Stack } from '@mui/material';
import React from 'react';

const Caracter = ({ image, size, isBig }) => {
	return (
		<Stack
			justifyContent={'center'}
			alignItems={'center'}
			height={{ sm: `${isBig ? '80vh' : '60vh'}`, xs: '80vh' }}
		>
			<img alt='Caracter' src={image} height={size} />
		</Stack>
	);
};

export default Caracter;
