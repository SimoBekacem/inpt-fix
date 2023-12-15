import React from 'react';
import { Stack, Button } from '@mui/material';

import DataTable from '../../../Admin_globale-components/Table/Table.component';
import DataFrom from '../../../Admin_globale-components/Form /Form.component';

import {
	DataFromLabels,
	profileDropDownLables,
} from '../../constants/ProfileFormLabels';
import { rows, tableHeaderLabels } from '../../constants/ProfileTableLabels';

const TableContainer = () => {
	const [openForm, setOpenForm] = React.useState(false);
	const handleClick = () => {
		setOpenForm(!openForm);
	};
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
				{openForm ? (
					<DataFrom
						DataFromLabels={DataFromLabels}
						profileDropDownLables={profileDropDownLables}
					/>
				) : (
					<DataTable
						rows={rows}
						tableHeaderLabels={tableHeaderLabels}
					/>
				)}
				<Button
					onClick={handleClick}
					color='success'
					size='large'
					variant='contained'
				>
					Add User
				</Button>
			</Stack>
		</Stack>
	);
};
export default TableContainer;
