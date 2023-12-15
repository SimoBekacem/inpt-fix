import * as React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
} from '@mui/material';

import { cardStyle, typographyStyle, buttonStyle } from './Card.style';

const CostumCard = ({ title, description, button, color }) => {
	return (
		<Card sx={{ ...cardStyle, backgroundColor: color }}>
			<CardContent>
				<Typography variant='h5' component='div' sx={typographyStyle}>
					{title}
				</Typography>
				<Typography
					variant='body2'
					width={'80%'}
					mt={2}
					sx={{
						color: 'white',
					}}
				>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant='outlined' color='success' sx={buttonStyle}>
					{button}
				</Button>
			</CardActions>
		</Card>
	);
};
export default CostumCard;
