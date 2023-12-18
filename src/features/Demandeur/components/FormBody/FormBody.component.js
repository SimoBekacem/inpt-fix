import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

import LignerStepper from '../LignerStepper/LignerSteppercomponent';
import DataFrom from '../FormDemandeur /Form.component';
import FormManager from '../FormManager/FromManager.component';
import FormTech from '../FormTech/FormTech.component';

const FormBody = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Stack>
					<Typography
						variant='h5'
						sx={{
							textAlign: 'center',
							margin: '2rem 0',
						}}
					>
						Créer une nouvelle demande
					</Typography>
					<LignerStepper />
				</Stack>
			</Grid>
			<Grid xs={12}>
				<DataFrom />
			</Grid>
			<Grid xs={12}>
				<FormManager />
			</Grid>
			<Grid xs={12}>
				<FormTech />
			</Grid>
		</Grid>
	);
};

export default FormBody;
