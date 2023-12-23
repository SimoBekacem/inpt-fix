import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	Box,
} from '@mui/material';

const DataFormDropdown = ({ label, navigateButton }) => {
	const [age, setAge] = React.useState('');
	const navigate = useNavigate();

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const handleClick = () => {
		navigate(navigateButton);
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
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				{navigateButton ? (
					<Button
						value={40}
						color='primary'
						variant='contained'
						sx={{
							marginTop: '1rem',
						}}
						onClick={handleClick}
					>
						Add Role
					</Button>
				) : null}
			</FormControl>
		</Box>
	);
};

export default DataFormDropdown;
