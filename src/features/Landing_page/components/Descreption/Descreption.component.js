import * as React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const Description = () => {
	return (
		<Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
			<Card elevation={0}>
				<CardContent elevation={0}>
					<Typography
						variant='h3'
						component='div'
						sx={{
							letterSpacing: '0.5rem',
						}}
					>
						Make your <br /> workflow easier
					</Typography>
					<Typography
						variant='h5'
						width={'100%'}
						mt={2}
						sx={{
							letterSpacing: '0.25rem',
						}}
					>
						Our website is didicated for companys <br /> that needs
						to improve their workflow
					</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Description;
