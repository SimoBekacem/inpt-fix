import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@mui/material';

import ApplicantTableButtons from '../ApplicantTableButtons/ApplicantTableButtons.component';

import {
	StyledTableCell,
	StyledTableRow,
	headerTypographyStyle,
} from '../DataTable/DataTable.style';

import { tableHeaderLabels } from '../../constants/applicantTableLabels';

const DataTableManager = () => {
	const requests = useSelector((state) => state.requestList.value.requests);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const newRows = requests
		.map((request) => {
			console.log(request.deleted);
			//?: this is for formating the date in order to show it
			if (!request.deleted) {
				const currentDate = request.date;
				const year = currentDate.getFullYear();
				const month = (currentDate.getMonth() + 1)
					.toString()
					.padStart(2, '0');
				const day = currentDate.getDate().toString().padStart(2, '0');
				const formattedDate = `${year}-${month}-${day}`;
				return {
					id: request.id,
					creationDate: formattedDate,
					Localisation: `${request.localisation.departement} ${request.localisation.subDepartement}`,
					anomalieType: request.problemType[0],
				};
			}
		})
		.filter(Boolean);
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
								<>
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
								</>
							))}
							{/*todo: here i should bring the buttons with the routs*/}
							<StyledTableCell
								sx={{
									fontWeight: 'bold',
								}}
								align='center'
								scope='row'
								size='large'
							>
								<Button
									variant='outlined'
									sx={{
										marginLeft: '1rem',
									}}
									onClick={() => {
										navigate(`delegateRequest/${row.id}`);
									}}
								>
									Delegate
								</Button>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTableManager;