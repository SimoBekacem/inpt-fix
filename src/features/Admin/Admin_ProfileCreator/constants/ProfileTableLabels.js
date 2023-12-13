import React from 'react';
import { Button } from '@mui/material';

export const tableHeaderLabels = [
	'First Name',
	'Last Name',
	'Role In Serves',
	'Role In Proccess',
];
export const createData = (
	firstName,
	lastName,
	roleProcess,
	roleService,
	buttons
) => {
	return { firstName, lastName, roleProcess, roleService, buttons };
};
export const buttonsLables = ['Delet', 'Edit', 'Detais'];

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
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
];
