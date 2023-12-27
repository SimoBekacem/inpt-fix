import * as React from 'react';
import { Alert, AlertTitle, Stack } from '@mui/material';

function AlertError() {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				You missing some information —{' '}
				<strong>please fill all the form!</strong>
			</Alert>
		</Stack>
	);
}
export default AlertError;
