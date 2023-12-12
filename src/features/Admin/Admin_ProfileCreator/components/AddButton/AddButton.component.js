import React from 'react';
import { Box, Button } from '@mui/material';

const AddButton = ({ label }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'end',
				alignItems: 'center',
			}}
		>
			<Button variant='contained' size='large'>
				{label}
			</Button>
		</Box>
	);
};

export default AddButton;
