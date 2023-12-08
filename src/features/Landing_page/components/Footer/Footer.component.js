import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Stack
			justifyContent={'center'}
			m={'auto'}
			spacing={4}
			sx={{
				backgroundColor: 'rgb(231	253	232	)',
				padding: '2rem 3rem',
			}}
		>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<img src={require('../../../../assets/logo.svg')} />
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
					<Button
						sx={{
							color: 'black',
							fontWeight: 'bold',
						}}
					>
						Home
					</Button>
					<Button
						sx={{
							color: 'black',
							fontWeight: 'bold',
						}}
					>
						Documentation
					</Button>
					<Button variant='outlined'>Start Now</Button>
				</Stack>
			</Stack>
			<Stack justifyContent={'center'}>
				<Typography sx={{ textAlign: 'center' }}>
					&copy;Workflow Fix. 2023, MOROCCO. All rights reserved
				</Typography>
				<Typography
					sx={{ textAlign: 'center' }}
					width={'80%'}
					m={'auto'}
					mt={'0.5rem'}
					variant='caption'
				>
					When you visit or interact with our sites, services or
					tools, we or our authorised service providers may use
					cookies for storing information to help provide you with a
					better, faster and safer experience and for marketing
					purposes.
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Footer;
