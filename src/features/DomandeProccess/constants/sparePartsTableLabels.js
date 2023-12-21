import React from 'react';
import { Button } from '@mui/material';

export const tableHeaderLabels = [
	'N° de demande',
	'Localisation',
	"Nature de l'anomalie",
	'Technician',
	'Deadline',
];
const createData = (
	id,
	Localisation,
	anomalieType,
	Technician,
	Deadline,
	buttons
) => {
	return {
		id,
		Localisation,
		anomalieType,
		Technician,
		Deadline,
		buttons,
	};
};
export const buttonsLables = ['Edit', 'Detais'];

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
	createData(
		'Problem-41T70U4BZZ',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-QGZFNXKWNP',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-7ZXT64KZGK',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-HPR2GHOVRC',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-MZDRNF1887',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
];
