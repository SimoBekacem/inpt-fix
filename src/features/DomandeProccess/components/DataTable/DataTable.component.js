import * as React from 'react';
import { useSelector } from 'react-redux';
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
} from './DataTable.style';

import {
	buttons,
	tableHeaderLabels,
} from '../../constants/applicantTableLabels';

//todo: here we should get the rows from the requestList.slice but it should be adapted to the table body .

const DataTable = () => {
	const requests = useSelector((state) => state.requestList.value.requests);
	const newRows = requests.map((request) => {
		//?: this is for formating the date in order to show it
		const currentDate = request.date;
		const year = currentDate.getFullYear();
		const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
		const day = currentDate.getDate().toString().padStart(2, '0');
		const formattedDate = `${year}-${month}-${day}`;
		return {
			id: request.id,
			creationDate: formattedDate,
			Localisation: `${request.localisation.departement} ${request.localisation.subDepartement}`,
			anomalieType: request.problemType[0],
			buttons,
		};
	});
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
					{newRows.map((row) => (
						<StyledTableRow key={row.id}>
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
