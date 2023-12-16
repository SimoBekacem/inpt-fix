import * as React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

import { steps } from '../../constants/stepperLables.constant';

const LignerStepper = () => {
	return (
		<Box sx={{ width: '80%', margin: 'auto' }}>
			<Stepper activeStep={1} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};
export default LignerStepper;
