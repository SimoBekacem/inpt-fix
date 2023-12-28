import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Paper, Grid, TextField, FormLabel, Stack } from '@mui/material';

import ImageContainer from '../ImageContainer/ImageContainer.component';
import DataFormDropDown from '../Dropdown/Dropdown.compoenent';
import DatePickerDropDown from '../DatePickerDropDown/DatePickerDropDown.component';
import CreationFormCheckBox from '../CreationFormCheckBox/CreationFormCheckBox.component';

const ReadForm = () => {
	const { requestId } = useParams();
	//todo: here we can see the id now you should get the request from the list base on the id and pass the arguments
	const requestList = useSelector(
		(state) => state.requestList.value.requests
	);
	console.log(
		'🚀 ~ file: ReadForm.component.js:15 ~ ReadForm ~ requestList:',
		requestList
	);
	const request = requestList.filter((request) => request.id === requestId);
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
				spacing={4}
				sx={{
					width: '80%',
					padding: '2rem 3rem 3rem 2rem',
				}}
			>
				<Grid item xs={6}>
					<FormLabel component='legend'>
						Nature de l'anomalie:
					</FormLabel>
					<Grid
						container
						sx={{
							margin: '1rem 0',
						}}
						spacing={1}
					>
						<CreationFormCheckBox
							readOnly
							request={request[0].problemType}
						/>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id='outlined-multiline-static'
						defaultValue={request[0].descreption}
						disabled
						multiline
						rows={10}
						sx={{
							width: '90%',
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<Stack spacing={2}>
						<DataFormDropDown
							name='departement'
							label={'Departement'}
							defaultValue={request[0].localisation.departement}
						/>
						<DataFormDropDown
							name='subDepartement'
							label={'Sub Departement'}
							defaultValue={
								request[0].localisation.subDepartement
							}
						/>
						<DatePickerDropDown isDisabled={true} />
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<ImageContainer readOnlyImage={request[0].image} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default ReadForm;
