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

const DataTable = ({ rows, tableHeaderLabels }) => {
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
								<StyledTableCell
									sx={{
										fontWeight: 'bold',
									}}
									align='center'
									scope='row'
									size='large'
								>
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

export default DataTable;
