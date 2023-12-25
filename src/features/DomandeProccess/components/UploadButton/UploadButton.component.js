import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { VisuallyHiddenInput } from './UploadButton.style';

const UploadButton = () => {
	const [imageSrc, setImageSrc] = React.useState('');

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);
		setImageSrc(imageUrl);
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
			{/* <img src={imageSrc} alt='Uploaded Image' /> */}
		</>
	);
};
export default UploadButton;
