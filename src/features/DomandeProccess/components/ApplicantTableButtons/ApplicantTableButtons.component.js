import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteRequest } from '../../slices/requestList.slice';

const ApplicantTableButtons = ({ requestId }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<>
			<Button
				variant='outlined'
				sx={{
					marginLeft: '1rem',
				}}
				onClick={() => {
					dispatch(deleteRequest(requestId));
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
