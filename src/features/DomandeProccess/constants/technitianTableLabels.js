import React from 'react';
import { Button } from '@mui/material';

export const tableHeaderLabels = [
	'N° de demande',
	'Localisation',
	"Nature de l'anomalie",
	'Resultat de reparation',
	'Deadline',
];
const createData = (
	id,
	Localisation,
	anomalieType,
	deadline,
	resultes,
	buttons
) => {
	return {
		id,
		Localisation,
		anomalieType,
		resultes,
		deadline,
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
		'2024-03-24',
		'Definitive',
		buttons
	),
	createData(
		'Problem-QGZFNXKWNP',
		'B class 110',
		'Resaux',
		'2024-03-24',
		'Definitive',
		buttons
	),
	createData(
		'Problem-7ZXT64KZGK',
		'B class 110',
		'Resaux',
		'2024-03-24',
		'Definitive',
		buttons
	),
	createData(
		'Problem-HPR2GHOVRC',
		'B class 110',
		'Resaux',
		'2024-03-24',
		'Definitive',
		buttons
	),
	createData(
		'Problem-MZDRNF1887',
		'B class 110',
		'Resaux',
		'2024-03-24',
		'Definitive',
		buttons
	),
];
