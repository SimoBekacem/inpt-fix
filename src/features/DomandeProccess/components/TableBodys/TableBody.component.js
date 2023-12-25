import React from 'react';
import { Stack } from '@mui/material';

import DataTable from '../Table/Table.component';

const ApplicantTableBody = ({ tableHeaderLabels, rows }) => {
	return (
		<Stack
			direction={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				height: '80vh',
			}}
		>
			{/* I changed the width from the 80% to 90% in order to make the reception table big but this may make some problems */}
			<Stack
				direction={'column'}
				alignItems={'center'}
				gap={4}
				sx={{
					width: '90%',
				}}
			>
				<DataTable tableHeaderLabels={tableHeaderLabels} rows={rows} />
			</Stack>
		</Stack>
	);
};

export default ApplicantTableBody;
