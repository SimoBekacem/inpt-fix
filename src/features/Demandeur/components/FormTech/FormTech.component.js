import React from 'react';
import {
	Paper,
	Grid,
	TextField,
	FormControlLabel,
	FormLabel,
	Stack,
	Button,
	Radio,
	RadioGroup,
	FormControl,
	IconButton,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {
	radioListLabels,
	textFieldLabel,
	needRechangePeacesLables,
	rechangePeacesLabels,
} from '../../constants/techLables.comstant';

// todo : ther is a problem in creating the peace fealde so fix it .
const FormTech = () => {
	const [quantity, setQuantity] = React.useState(1);
	const handleClick = () => {
		setQuantity(quantity++);
	};
	console.log(quantity);
	const peacesForm = () => {
		for (let i = 0; i < quantity; i++) {
			return (
				<Stack direction='row' spacing={4}>
					{rechangePeacesLabels.map((label) => {
						return (
							<TextField
								id='outlined-basic'
								label={label}
								variant='outlined'
							/>
						);
					})}
					<IconButton onClick={handleClick} aria-label='add'>
						<AddIcon fontSize='large' />
					</IconButton>
					<IconButton aria-label='delete'>
						<DeleteOutlineIcon fontSize='large' />
					</IconButton>
				</Stack>
			);
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
				<Grid item>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Resultat de reparation:
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							name='row-radio-buttons-group'
						>
							{radioListLabels.map((label) => {
								return (
									<FormControlLabel
										value={label}
										control={<Radio />}
										label={label}
									/>
								);
							})}
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='outlined-multiline-static'
						label={textFieldLabel}
						multiline
						rows={7}
						sx={{
							width: '100%',
						}}
					/>
				</Grid>
				<Grid item>
					<FormControl>
						<FormLabel id='demo-row-radio-buttons-group-label'>
							Piece de rechange:
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							name='row-radio-buttons-group'
						>
							{needRechangePeacesLables.map((label) => {
								return (
									<FormControlLabel
										value={label}
										control={<Radio />}
										label={label}
									/>
								);
							})}
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item>{peacesForm()}</Grid>
				<Grid item xs={12}>
					<Stack justifyContent={'center'} alignItems={'end'}>
						<Button
							variant='contained'
							size='large'
							sx={{
								margin: '1rem 0',
								width: '8rem',
							}}
						>
							Valider
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default FormTech;
