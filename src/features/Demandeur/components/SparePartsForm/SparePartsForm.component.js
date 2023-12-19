import React from 'react';
import {
	Paper,
	Grid,
	TextField,
	FormControlLabel,
	Stack,
	Button,
	Radio,
	RadioGroup,
} from '@mui/material';
import { rechangePeaces } from '../../constants/managerStore.constant';
console.log(rechangePeaces.designation);
const SparePartsForm = () => {
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
				<Grid item xs={12}>
					<Stack spacing={3}>
						{rechangePeaces.map((peace) => {
							return (
								<Stack
									direction='row'
									alignItems='center'
									spacing={4}
								>
									<TextField
										id='outlined-read-only-input'
										label='Designation peice'
										defaultValue={peace.designation}
										InputProps={{
											readOnly: true,
										}}
									/>
									<TextField
										id='outlined-basic'
										label={'Modele / Reference'}
										variant='outlined'
										defaultValue={peace.modele}
										InputProps={{
											readOnly: true,
										}}
									/>
									<TextField
										id='outlined-basic'
										label={'Quantite'}
										variant='outlined'
										defaultValue={peace.quantite}
										InputProps={{
											readOnly: true,
										}}
									/>
									<RadioGroup
										row
										aria-labelledby='demo-row-radio-buttons-group-label'
										name='row-radio-buttons-group'
									>
										<FormControlLabel
											value='Oui'
											control={<Radio />}
											label='Oui'
										/>
										<FormControlLabel
											value='Non'
											control={<Radio />}
											label='Non'
										/>
									</RadioGroup>
								</Stack>
							);
						})}
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='outlined-multiline-static'
						label={'Commentaire'}
						multiline
						rows={7}
						sx={{
							width: '100%',
						}}
					/>
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
						>
							Valider
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SparePartsForm;
