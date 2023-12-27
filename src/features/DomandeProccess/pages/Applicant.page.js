import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';

// todo: here you need to set up the router in order to route between the pages
import Header from '../components/Header/Header.component';
import TableBody from '../components/TableBodys/TableBody.component.js';

const ApplicantPage = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('createRequest');
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<TableBody />
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
