import React from 'react';

import { Typography, Stack } from '@mui/material';
import LignerStepper from '../LignerStepper/LignerSteppercomponent';

//todo: should get an other var in order to set the stepper in the right position .
const TitleAndStipper = ({ title }) => {
	return (
		<Stack>
			<Typography
				variant='h5'
				sx={{
					textAlign: 'center',
					margin: '2rem 0',
				}}
			>
				{title}
			</Typography>
			<LignerStepper />
		</Stack>
	);
};

export default TitleAndStipper;
