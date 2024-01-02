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
import { Link } from 'react-router-dom';

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
					<Stack
						direction={'row'}
						spacing={4}
						sx={{ marginRight: '4rem' }}
					>
						<Link to={'/applicant'}>Applicant</Link>
						<Link to={'/manager'}>manager</Link>
						<Link to={'/technician'}>technician</Link>
						<Link to={'/storeManager'}>Stor Manager</Link>
					</Stack>
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
