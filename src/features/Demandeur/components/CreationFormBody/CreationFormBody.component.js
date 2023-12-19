import React from 'react';
import { Grid } from '@mui/material';

import TitleAndStipper from '../TitleAndStipper/TitleAndStipper.component';
import CreationForm from '../CreationForm/CreationForm.component';

const CreationFormBody = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<TitleAndStipper title={'Créer une nouvelle demande'} />
			</Grid>
			<Grid xs={12}>
				<CreationForm />
			</Grid>
		</Grid>
	);
};

export default CreationFormBody;
