import React from 'react';
import { Stack, Button } from '@mui/material';

import DataTable from '../Table/Table.component';
import DataFrom from '../Form /Form.component';

import { rows, tableHeaderLabels } from '../../constantes/RoleTableLabels';
import {
	DataFromLabels,
	profileDropDownLables,
} from '../../constantes/RoleFormLabels';

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
					Add Role
				</Button>
			</Stack>
		</Stack>
	);
};
export default TableContainer;
