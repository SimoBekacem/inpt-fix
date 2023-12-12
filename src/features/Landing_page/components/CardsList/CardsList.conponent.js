import React from 'react';

import { Stack } from '@mui/material';

import CostumCard from '../Card/Card.component';

import { CardsConstants } from '../../constants/Cards.constants';

const CardsList = () => {
	return (
		<Stack
			direction={{ sm: 'row', xs: 'column' }}
			spacing={{ sm: 9, xs: 3 }}
			justifyContent={'center'}
			alignItems={'center'}
		>
			{CardsConstants.map(({ title, description, button, color }) => {
				return (
					<CostumCard
						title={title}
						description={description}
						button={button}
						color={color}
					/>
				);
			})}
		</Stack>
	);
};

export default CardsList;
