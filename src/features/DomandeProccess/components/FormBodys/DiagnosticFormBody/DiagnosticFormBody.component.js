import React from 'react';
import { Grid } from '@mui/material';

import TitleAndStipper from '../../TitleAndStipper/TitleAndStipper.component';
import DiagnosticForm from '../../Forms/DiagnosticForm/DiagnosticForm.component';

const DiagnosticFormBody = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<TitleAndStipper title={'Recepter une nouvelle demande'} />
			</Grid>
			<Grid xs={12}>
				<DiagnosticForm />
			</Grid>
		</Grid>
	);
};

export default DiagnosticFormBody;
