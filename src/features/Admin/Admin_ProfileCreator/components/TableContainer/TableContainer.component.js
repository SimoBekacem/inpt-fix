import React from 'react';
import ProfilesTable from '../Table/Table.component';
import { Stack, Button } from '@mui/material';
import ProfileForm from '../ProfileForm /ProfileForm.component';
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
				{openForm ? <ProfileForm /> : <ProfilesTable />}
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
