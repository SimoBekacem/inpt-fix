import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	Paper,
	Grid,
	TextField,
	FormLabel,
	Stack,
	Button,
} from '@mui/material';

import UploadButton from '../../UploadButton/UploadButton.component';
import CreationFormCheckBox from '../../CreationFormCheckBox/CreationFormCheckBox.component';
import DataFormDropDown from '../../Dropdown/Dropdown.compoenent';
import DatePickerDropDown from '../../DatePickerDropDown/DatePickerDropDown.component';
import ImageContainer from '../../ImageContainer/ImageContainer.component';
import AlertError from '../../Alerts/AlertError/AlertError.component';

import { formTextLabel } from '../../../constants/stepperLables.constant';

import {
	setDescriptionValue,
	ressetValues,
} from '../../../slices/creationForm.slice';
import { addNewRequest } from '../../../slices/requestList.slice';

const CreationFrom = ({ readOnly, request }) => {
	const creationForm = useSelector((state) => state.creationForm.value);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(creationForm);
	}, [creationForm]);

	const handleDescriptionChange = (event) => {
		const descreption = event.target.value;
		dispatch(setDescriptionValue(descreption));
	};

	const handleButtonClick = () => {
		const problemType = creationForm.problemType;
		if (
			creationForm.descreption &&
			problemType.lenght !== 0 &&
			creationForm.image &&
			creationForm.localisation.departement &&
			creationForm.localisation.subDepartement
		) {
			dispatch(addNewRequest(creationForm));
			dispatch(ressetValues());
			navigate('/applicant');
			setError(false);
		} else {
			setError(true);
		}
	};

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
							readOnly={readOnly}
							request={request}
						/>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id='outlined-multiline-static'
						label={formTextLabel}
						onChange={handleDescriptionChange}
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
						/>
						<DataFormDropDown
							name='subDepartement'
							label={'Sub Departement'}
						/>
						<DatePickerDropDown isDisabled={true} />
						<UploadButton />
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<ImageContainer />
				</Grid>
				<Grid item xs={12}>
					<Stack justifyContent={'center'} alignItems={'center'}>
						{error ? <AlertError /> : null}
						<Button
							variant='contained'
							onClick={() => {
								handleButtonClick();
							}}
							sx={{
								margin: '3rem 0',
							}}
							size='large'
						>
							Submit
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default CreationFrom;
