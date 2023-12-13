import * as React from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@mui/material';

import {
	StyledTableCell,
	StyledTableRow,
	headerTypographyStyle,
} from './Table.style';

function createData(firstName, lastName, roleProcess, roleService, buttons) {
	return { firstName, lastName, roleProcess, roleService, buttons };
}

const buttons = [
	<Button
		variant='outlined'
		sx={{
			marginLeft: '1rem',
		}}
	>
		Delet
	</Button>,
	<Button
		variant='outlined'
		sx={{
			marginLeft: '1rem',
		}}
	>
		Edit
	</Button>,
	<Button
		variant='outlined'
		sx={{
			marginLeft: '1rem',
		}}
	>
		Detais
	</Button>,
];

const rows = [
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
	createData('Simo', 'hassane', 'teacher', 'Domandeur', buttons),
];

const ProfilesTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell
							align='center'
							sx={headerTypographyStyle}
						>
							First Name
						</StyledTableCell>
						<StyledTableCell
							align='center'
							sx={headerTypographyStyle}
						>
							Last Name
						</StyledTableCell>
						<StyledTableCell
							align='center'
							sx={headerTypographyStyle}
						>
							Role In Serves
						</StyledTableCell>
						<StyledTableCell
							align='center'
							sx={headerTypographyStyle}
						>
							Role In Proccess
						</StyledTableCell>
						<StyledTableCell align='center'></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.lastName}>
							<StyledTableCell
								align='center'
								component='th'
								scope='row'
							>
								{row.firstName}
							</StyledTableCell>
							<StyledTableCell align='center'>
								{row.lastName}
							</StyledTableCell>
							<StyledTableCell align='center'>
								{row.roleProcess}
							</StyledTableCell>
							<StyledTableCell align='center'>
								{row.roleService}
							</StyledTableCell>
							<StyledTableCell align='center'>
								{row.buttons}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfilesTable;
