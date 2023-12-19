import React from 'react';
import { Grid } from '@mui/material';

import TitleAndStipper from '../../TitleAndStipper/TitleAndStipper.component';
import ReceptionForm from '../../Forms/ReceptionForm/ReceptionForm.component';

const ReceptionFormBody = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<TitleAndStipper title={'Recepter une nouvelle demande'} />
			</Grid>
			<Grid xs={12}>
				<ReceptionForm />
			</Grid>
		</Grid>
	);
};

export default ReceptionFormBody;
