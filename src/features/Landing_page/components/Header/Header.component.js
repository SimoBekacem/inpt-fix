import * as React from 'react';

import { AppBar, Box, Toolbar, Stack, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { button_typorgraphy } from './Header.style';

export default function Header() {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			<AppBar
				position='static'
				color='default'
				sx={{
					padding: {
						sm: '0.75rem 3rem',
						xs: '0.25rem 0rem',
					},
					boxShadow: '0',
				}}
			>
				<Toolbar>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						width='100%'
					>
						<img src={require('../../../../assets/logo.svg')} />
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{
								mr: 2,
								display: {
									xs: 'block',
									sm: 'none',
								},
							}}
						>
							<MenuIcon />
						</IconButton>
						<Stack
							spacing={2}
							direction={'row'}
							alignItems={'center'}
							sx={{
								display: {
									xs: 'none',
									sm: 'flex',
								},
							}}
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
