import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const IMAGE_LOGO = require('../../../../assets/imageLogo.png');

const ImageContainer = ({ readOnlyImage }) => {
	const creationForm = useSelector((state) => state.creationForm.value);
	return (
		<Box
			height='250px'
			width='100%'
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{readOnlyImage ? (
				<img
					src={readOnlyImage}
					alt='problem exemple'
					style={{
						maxWidth: '100%',
						maxHeight: '100%',
					}}
				/>
			) : (
				<img
					src={creationForm.image ? creationForm.image : IMAGE_LOGO}
					alt={
						creationForm.image ? 'problem exemple' : 'problem logo'
					}
					style={{
						maxWidth: '100%',
						maxHeight: '100%',
					}}
				/>
			)}
		</Box>
	);
};
export default ImageContainer;
