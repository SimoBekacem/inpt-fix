import * as React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { VisuallyHiddenInput } from './UploadButton.style';

import { setImageValue } from '../../slices/creationForm.slice';

const UploadButton = () => {
	const dispatch = useDispatch();

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		dispatch(setImageValue(imageUrl));
	};

	return (
		<>
			<Button
				component='label'
				variant='contained'
				sx={{
					margin: '0',
				}}
				startIcon={<CloudUploadIcon />}
			>
				Upload Image
				<VisuallyHiddenInput
					onChange={(event) => {
						handleImageUpload(event);
					}}
					type='file'
				/>
			</Button>
		</>
	);
};
export default UploadButton;
