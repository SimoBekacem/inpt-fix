import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { VisuallyHiddenInput } from './UploadButton.style';

const UploadButton = () => {
	return (
		<Button
			component='label'
			variant='contained'
			sx={{
				margin: '0',
			}}
			startIcon={<CloudUploadIcon />}
		>
			Upload Image
			<VisuallyHiddenInput type='file' />
		</Button>
	);
};
export default UploadButton;
