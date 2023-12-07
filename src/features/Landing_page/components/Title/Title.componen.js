import React from 'react';

import { Button, Stack, Typography } from '@mui/material';

import { typographyStyle, buttonStyle } from './Title.style';

const Title = () => {
	return (
		<Stack
			sx={{ height: '80vh' }}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Stack alignItems={'center'} spacing={4}>
				<Typography variant='h3' sx={typographyStyle}>
					Make your workflow <br />
					easier
				</Typography>
				<Button variant='outlined' color='success' sx={buttonStyle}>
					Try For Free
				</Button>
			</Stack>
		</Stack>
	);
};

export default Title;
