import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setLocalisationValue } from '../../slices/creationForm.slice';

const DataFormDropdown = ({ label, name }) => {
	const [age, setAge] = React.useState('');
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const info = event.target.value;
		dispatch(setLocalisationValue({ [name]: info }));
		setAge(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 170 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					label={label}
					name={name}
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default DataFormDropdown;
