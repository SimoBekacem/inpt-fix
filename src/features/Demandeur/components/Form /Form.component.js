import React from 'react';
import {
	Paper,
	Grid,
	TextField,
	Checkbox,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Stack,
	Button,
} from '@mui/material';

import UploadButton from '../UploadButton/UploadButton.component';
import DataFromDropdown from '../FormDropdonw/Dropdonw.compoenent';
import FirstComponent from '../DatePicker/DatePicker.component';

import {
	formTextLabel,
	formSelectLabels,
	formDropdown,
} from '../../constants/stepperLables.constant';

const DataFrom = () => {
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
				<Grid item>
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
							return (
								<Grid item>
									<FormControlLabel
										control={<Checkbox />}
										label={label}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item xs={7}>
					<TextField
						id='outlined-multiline-static'
						label={formTextLabel}
						multiline
						rows={7}
						sx={{
							width: '90%',
						}}
					/>
				</Grid>
				<Grid item xs={5}>
					<Stack spacing={2}>
						<DataFromDropdown label={formDropdown} />
						<FirstComponent />
						<UploadButton />
					</Stack>
				</Grid>
				<Grid xs={12}>
					<Stack justifyContent={'center'} alignItems={'center'}>
						<Button
							variant='contained'
							sx={{
								margin: '3rem 0',
								width: '5rem',
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

export default DataFrom;
