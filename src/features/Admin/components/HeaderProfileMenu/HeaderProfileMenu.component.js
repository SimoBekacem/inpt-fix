import React from 'react';

import { Menu, MenuItem, Avatar, ListItemIcon, Divider } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';

import { PaperProps } from './HeaderProfileMenu.style';

const HeaderProfileMenu = ({ anchorEl, handleClose, open }) => {
	const handleCloseMenu = () => {
		handleClose();
	};
	return (
		<Menu
			anchorEl={anchorEl}
			id='account-menu'
			open={open}
			onClose={handleCloseMenu}
			onClick={handleCloseMenu}
			PaperProps={PaperProps}
			transformOrigin={{
				horizontal: 'right',
				vertical: 'top',
			}}
			anchorOrigin={{
				horizontal: 'right',
				vertical: 'bottom',
			}}
		>
			<MenuItem onClick={handleCloseMenu}>
				<Avatar /> Profile
			</MenuItem>
			<MenuItem onClick={handleCloseMenu}>
				<Avatar /> My account
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleCloseMenu}>
				<ListItemIcon>
					<PersonAdd fontSize='small' />
				</ListItemIcon>
				Add another account
			</MenuItem>
			<MenuItem onClick={handleCloseMenu}>
				<ListItemIcon>
					<Settings fontSize='small' />
				</ListItemIcon>
				Settings
			</MenuItem>
			<MenuItem onClick={handleCloseMenu}>
				<ListItemIcon>
					<Logout fontSize='small' />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default HeaderProfileMenu;
