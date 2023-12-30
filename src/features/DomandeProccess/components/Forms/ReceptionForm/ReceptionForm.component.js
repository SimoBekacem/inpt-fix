import React from 'react';
import { Paper, Grid, Stack, Button, Divider } from '@mui/material';

import TechList from '../../TechList/TechList.component';
import SearchBar from '../../SearchBar/SearchBar.component';
import DatePickerDropDown from '../../DatePickerDropDown/DatePickerDropDown.component';
import { useNavigate, useParams } from 'react-router-dom';

const ReceptionForm = () => {
	const { requestId } = useParams();
	const navigate = useNavigate();
	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '5rem 0',
			}}
			elevation={0}
		>
			<Grid
				container
				spacing={2}
				sx={{
					width: '80%',
					padding: '2rem 3rem 3rem 2rem',
				}}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Grid item xs={12}>
					<Divider
						textAlign='left'
						sx={{
							margin: '2rem 0',
							fontSize: '1rem',
						}}
					>
						Choose Tech
					</Divider>
					<SearchBar />
				</Grid>
				<Grid item xs={12}>
					<TechList requestId={requestId} />
				</Grid>
				<Grid item xs={12}>
					<Divider
						textAlign='left'
						sx={{
							margin: '1rem 0',
							fontSize: '1rem',
						}}
					>
						Choose The Deadline
					</Divider>
					<Stack
						justifyContent={'center'}
						alignItems={'center'}
						width={'100%'}
					>
						<DatePickerDropDown requestId={requestId} />
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<Stack justifyContent={'center'} alignItems={'center'}>
						<Button
							variant='contained'
							onClick={() => {
								navigate('/manager');
							}}
						>
							Submit
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default ReceptionForm;
