import React from 'react';
import { Stack } from '@mui/material';

import StorageDataTable from '../StorageDataTabel/StorageDataTabel.component';
const StorageTableBody = () => {
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
				<StorageDataTable />
			</Stack>
		</Stack>
	);
};

export default StorageTableBody;
