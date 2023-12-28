import React from 'react';
import { useDispatch } from 'react-redux';

import { Checkbox, FormControlLabel, Grid } from '@mui/material';

import { formSelectLabels } from '../../constants/stepperLables.constant';

import { setProblemListValue } from '../../slices/creationForm.slice';

const ApplicantTable = ({ request, readOnly }) => {
	const dispatch = useDispatch();

	console.log(request);
	const handleCheckBoxChange = (event) => {
		const item = event.target.value;
		dispatch(setProblemListValue(item));
	};

	return (
		<>
			{formSelectLabels.map((label) => {
				let checkBox = <Checkbox value={label} />;
				if (request && readOnly) {
					const checkedList = request;
					const isChecked = checkedList.includes(label);
					checkBox = <Checkbox checked={isChecked} disabled />;
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
		</>
	);
};
export default ApplicantTable;
