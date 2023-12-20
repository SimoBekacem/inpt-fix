import React from 'react';
import { Stack } from '@mui/material';

import DataTable from '../../Table/Table.component';
import {
	tableHeaderLabels,
	rows,
} from '../../../constants/applicantTableLabels';

const ApplicantTableBody = () => {
	return (
		<Stack
			direction={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				height: '90vh',
			}}
		>
			<Stack
				direction={'column'}
				alignItems={'center'}
				gap={4}
				sx={{
					width: '80%',
				}}
			>
				<DataTable tableHeaderLabels={tableHeaderLabels} rows={rows} />
			</Stack>
		</Stack>
	);
};

export default ApplicantTableBody;
