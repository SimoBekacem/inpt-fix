import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
} from '../../../constants/techLables.constant';

import {
	addReparationResult,
	addNeedPeaces,
	addTechDescription,
	addPeacesList,
} from '../../../slices/requestList.slice';
import { useDispatch, useSelector } from 'react-redux';

// todo : ther is a problem in creating the peace fealde so fix it .
const DiagnosticForm = () => {
	let [quantity, setQuantity] = React.useState(1);
	const [peace, setPeace] = React.useState({
		Designation_peice: '',
		Modele_Reference: '',
		Quantite: '',
	});
	const [peaceList, setPeaceList] = React.useState([]);
	console.log(peaceList);
	const { requestId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const requests = useSelector((state) => state.requestList.value.requests);
	console.log(requests);
	const handleClick = () => {
		setQuantity(quantity++);
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
					<FormControl
						onChange={(event) => {
							dispatch(
								addReparationResult({
									id: requestId,
									reparationResult: event.target.value,
								})
							);
						}}
					>
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
						onChange={(event) => {
							dispatch(
								addTechDescription({
									id: requestId,
									techDescription: event.target.value,
								})
							);
						}}
						rows={7}
						sx={{
							width: '100%',
						}}
					/>
				</Grid>
				<Grid item>
					<FormControl
						onChange={(event) => {
							dispatch(
								addNeedPeaces({
									id: requestId,
									needPeaces: event.target.value,
								})
							);
						}}
					>
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
				<Grid item>
					<Stack direction='row' spacing={4}>
						{rechangePeacesLabels.map((label) => {
							return (
								<TextField
									id='outlined-basic'
									label={label}
									name={label}
									value={peace[label]}
									onChange={(event) => {
										setPeace((state) => ({
											...state,
											[event.target.name]:
												event.target.value,
										}));
									}}
									variant='outlined'
								/>
							);
						})}
						<IconButton onClick={handleClick} aria-label='add'>
							<AddIcon
								onClick={() => {
									setPeaceList((state) => [...state, peace]);
									setPeace({
										Designation_peice: '',
										Modele_Reference: '',
										Quantite: '',
									});
								}}
								fontSize='large'
							/>
						</IconButton>
						<IconButton aria-label='delete'>
							<DeleteOutlineIcon fontSize='large' />
						</IconButton>
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<Stack justifyContent={'center'} alignItems={'end'}>
						<Button
							variant='contained'
							size='large'
							sx={{
								margin: '1rem 0',
								width: '8rem',
							}}
							onClick={() => {
								dispatch(
									addPeacesList({
										id: requestId,
										peacesList: peaceList,
									})
								);
								setTimeout(() => {
									navigate('/technician');
								}, 1000);
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

export default DiagnosticForm;
