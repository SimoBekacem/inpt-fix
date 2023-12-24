import * as React from 'react';

import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Stack,
	Badge,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import HeaderProfile from '../HeaderProfile/HeaderProfile.component';

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						INPT-Fix
					</Typography>
					<Stack spacing={2} direction={'row'} alignItems={'center'}>
						<Badge badgeContent={4} color='success'>
							<MailIcon color='secondary' fontSize='large' />
						</Badge>
						<HeaderProfile />
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
