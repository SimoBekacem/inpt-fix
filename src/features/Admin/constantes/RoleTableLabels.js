import React from 'react';
import { Button } from '@mui/material';

export const tableHeaderLabels = ['Role', 'Type Of The Role'];
export const createData = (Role, TypeOfTheRole, buttons) => {
	return { Role, TypeOfTheRole, buttons };
};
export const buttonsLables = ['Delet', 'Edit'];

const buttons = buttonsLables.map((label) => {
	return (
		<Button
			variant='outlined'
			sx={{
				marginLeft: '1rem',
			}}
		>
			{label}
		</Button>
	);
});

export const rows = [
	createData('Teacher', 'service', buttons),
	createData('Student', 'service', buttons),
	createData('Domendeur', 'proccess', buttons),
	createData('Admin', 'proccess', buttons),
];
