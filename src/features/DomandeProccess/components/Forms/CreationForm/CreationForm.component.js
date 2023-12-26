import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	Paper,
	Grid,
	TextField,
	Checkbox,
	FormControlLabel,
	FormLabel,
	Stack,
	Button,
	Box,
} from '@mui/material';

import UploadButton from '../../UploadButton/UploadButton.component';
import DataFormDropDown from '../../Dropdown/Dropdown.compoenent';
import FirstComponent from '../../DatePicker/DatePicker.component';

import {
	formTextLabel,
	formSelectLabels,
} from '../../../constants/stepperLables.constant';

import {
	setProblemListValue,
	setDescriptionValue,
} from '../../../slices/creationForm.slice';
import { addNewRequest } from '../../../slices/requestList.slice';

const imageLogo = require('../../../../../assets/imageLogo.png');

const CreationFrom = ({ readOnly, request }) => {
	const creationForm = useSelector((state) => state.creationForm.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(creationForm);
	}, [creationForm]);

	const handleDescriptionChange = (event) => {
		const descreption = event.target.value;
		dispatch(setDescriptionValue(descreption));
	};

	const handleCheckBoxChange = (event) => {
		const item = event.target.value;
		dispatch(setProblemListValue(item));
	};
	const handleButtonClick = () => {
		dispatch(addNewRequest(creationForm));
		navigate('/applicant');
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
						{formSelectLabels.map((label) => {
							let checkBox = <Checkbox value={label} />;
							if (request.problemType && readOnly) {
								const checkedList = request.problemType;
								const isChecked = checkedList.includes(label);
								checkBox = (
									<Checkbox checked={isChecked} disabled />
								);
							}
							return (
								<Grid item key={label}>
									<FormControlLabel
										onChange={(event) => {
											handleCheckBoxChange(event);
										}}
										control={checkBox}
										label={label}
									/>
								</Grid>
							);
						})}
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
						<FirstComponent isDisabled={true} />
						<UploadButton />
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<Box
						height='250px'
						width='100%'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{creationForm.image ? (
							<img
								src={creationForm.image}
								alt='problem exemple'
								style={{
									maxWidth: '100%',
									maxHeight: '100%',
								}}
							/>
						) : (
							<img
								src={imageLogo}
								alt='problem exemple'
								style={{
									maxWidth: '100%',
									maxHeight: '100%',
								}}
							/>
						)}
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Stack justifyContent={'center'} alignItems={'center'}>
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
