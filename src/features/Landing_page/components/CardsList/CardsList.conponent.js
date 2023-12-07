import React from 'react';

import { Stack } from '@mui/material';

import CostumCard from '../Card/Card.component';

import { CardsConstants } from '../../constants/Cards.constants';

const CardsList = () => {
	return (
		<Stack direction={'row'} spacing={9} justifyContent={'center'}>
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
