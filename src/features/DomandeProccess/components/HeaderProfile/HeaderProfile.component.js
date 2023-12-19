import React from 'react';

import { Tooltip, IconButton, Avatar } from '@mui/material';

import HeaderProfileMenu from '../HeaderProfileMenu/HeaderProfileMenu.component';

const HeaderProfile = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Tooltip title='Account settings'>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
				</IconButton>
			</Tooltip>
			<HeaderProfileMenu
				anchorEl={anchorEl}
				handleClose={handleClose}
				open={open}
			/>
		</>
	);
};

export default HeaderProfile;
