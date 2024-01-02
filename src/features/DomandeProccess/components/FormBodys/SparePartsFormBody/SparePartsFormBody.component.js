import React from 'react';
import { Grid } from '@mui/material';

import TitleAndStipper from '../../TitleAndStipper/TitleAndStipper.component';
import SparePartsForm from '../../Forms/SparePartsForm/SparePartsForm.component';

const SparePartsFormBody = () => {
	return (
		<Grid container>
			{/* <Grid item xs={12}>
				<TitleAndStipper
					title={"Pieces de rechange d'une nouvelle demande"}
				/>
			</Grid> */}
			<Grid xs={12}>
				<SparePartsForm />
			</Grid>
		</Grid>
	);
};

export default SparePartsFormBody;
