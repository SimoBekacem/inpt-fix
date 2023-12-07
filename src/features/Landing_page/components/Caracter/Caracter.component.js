import { Stack } from '@mui/material';
import React from 'react';

const Caracter = ({ image }) => {
	return (
		<Stack justifyContent={'center'} alignItems={'center'} height={'80vh'}>
			<img src={image} height={'100%'} />
		</Stack>
	);
};

export default Caracter;
