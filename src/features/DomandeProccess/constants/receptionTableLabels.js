import React from 'react';
import { Button } from '@mui/material';

export const tableHeaderLabels = [
	'N° de demande',
	'Créé le',
	'Localisation',
	"Nature de l'anomalie",
	'Technician',
	'Deadline',
];
const createData = (
	id,
	creationDate,
	Localisation,
	anomalieType,
	Technician,
	Deadline,
	buttons
) => {
	return {
		id,
		creationDate,
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
		'2023-12-08',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-QGZFNXKWNP',
		'2023-12-08',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-7ZXT64KZGK',
		'2023-12-08',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-HPR2GHOVRC',
		'2023-12-08',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
	createData(
		'Problem-MZDRNF1887',
		'2023-12-08',
		'B class 110',
		'Resaux',
		'El Habib Sabihi',
		'2024-03-24',
		buttons
	),
];
