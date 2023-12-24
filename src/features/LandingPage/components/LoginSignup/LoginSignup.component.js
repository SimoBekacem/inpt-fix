import React from 'react';

import CardsList from '../CardsList/CardsList.conponent';
import { Stack } from '@mui/material';

const LoginSignup = () => {
	return (
		<Stack sx={{ paddingTop: '5rem' }}>
			<CardsList />
		</Stack>
	);
};
export default LoginSignup;
