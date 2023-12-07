import { Stack } from '@mui/material';
import React from 'react';

const Caracter = ({ image, size }) => {
	return (
		<Stack justifyContent={'center'} alignItems={'center'} height={'80vh'}>
			<img src={image} height={size} />
		</Stack>
	);
};

export default Caracter;
