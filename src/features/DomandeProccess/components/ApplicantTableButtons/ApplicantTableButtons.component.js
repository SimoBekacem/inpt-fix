import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ApplicantTableButtons = ({ requestId }) => {
	const navigate = useNavigate();
	console.log(requestId);
	return (
		<>
			<Button
				variant='outlined'
				sx={{
					marginLeft: '1rem',
				}}
			>
				Delet
			</Button>
			<Button
				variant='outlined'
				sx={{
					marginLeft: '1rem',
				}}
				onClick={() => {
					navigate(`updateRequest/${requestId}`);
				}}
			>
				Edit
			</Button>
			<Button
				variant='outlined'
				sx={{
					marginLeft: '1rem',
				}}
				onClick={() => {
					navigate(`readRequest/${requestId}`);
				}}
			>
				Detais
			</Button>
		</>
	);
};
export default ApplicantTableButtons;
