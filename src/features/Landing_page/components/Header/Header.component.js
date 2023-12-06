import * as React from 'react';

import { AppBar, Box, Toolbar, Stack, Button } from '@mui/material';

import { button_typorgraphy } from './Header.style';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='default'
				sx={{ padding: '0.75rem 3rem', boxShadow: '0' }}
			>
				<Toolbar>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						width='100%'
					>
						<img src={require('../../../../assets/logo.png')} />
						<Stack
							spacing={2}
							direction={'row'}
							alignItems={'center'}
						>
							{['Contact', 'Why Us', 'Join'].map((link) => {
								return (
									<Button
										color='success'
										sx={button_typorgraphy}
									>
										{link}
									</Button>
								);
							})}

							<Button variant='contained' color='success'>
								Sing In
							</Button>
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
