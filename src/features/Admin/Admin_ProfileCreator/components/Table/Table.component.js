import * as React from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

import {
	StyledTableCell,
	StyledTableRow,
	headerTypographyStyle,
} from './Table.style';

const ProfilesTable = ({ rows, tableHeaderLabels }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label='customized table'>
				<TableHead>
					<TableRow>
						{tableHeaderLabels.map((label) => {
							return (
								<StyledTableCell
									align='center'
									sx={headerTypographyStyle}
								>
									{label}
								</StyledTableCell>
							);
						})}
						<StyledTableCell align='center'></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.lastName}>
							{Object.keys(row).map((keyName, i) => (
								<StyledTableCell align='center' scope='row'>
									{row[keyName]}
								</StyledTableCell>
							))}
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfilesTable;
