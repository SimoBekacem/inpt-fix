import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import TableBody from '../components/TableBodys/TableBody.component.js';

import { tableHeaderLabels, rows } from '../constants/applicantTableLabels.js';

const ApplicantPage = () => {
	const navigate = useNavigate();
	// const requestList = useSelector((state) => state.requestList.value);
	// const newRows = requestList.requests.map((request) => {
	// 	return {
	// 		id: request.id,
	// 		creationDate: request.date,
	// 		Localisation: `${request.localisation.departement} ${request.localisation.subDepartement}`,
	// 		anomalieType: request.problemType[0],
	// 	};
	// });
	const handleClick = () => {
		navigate('createRequest');
	};
	//!: here we have little problem that is the requestList.requests object is not adapted to the tabel form so adapte the tabel on requestList.requests .
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TableBody tableHeaderLabels={tableHeaderLabels} rows={rows} />
			</Grid>
			<Grid item xs={12}>
				<Stack direction='row' justifyContent='center'>
					<Button
						variant='contained'
						size='large'
						onClick={handleClick}
					>
						Create New Request
					</Button>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ApplicantPage;
