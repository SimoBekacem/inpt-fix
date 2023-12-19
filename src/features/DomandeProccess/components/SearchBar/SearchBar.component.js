import { Button, InputBase, Stack } from '@mui/material';
import * as React from 'react';

const SearchBar = () => {
	return (
		<Stack
			direction='row'
			sx={{
				width: '100%',
			}}
			justifyContent={'center'}
			spacing={2}
		>
			<InputBase
				placeholder='Search For A Technitien'
				inputProps={{ 'aria-label': 'search google maps' }}
				sx={{
					border: '2px solid gray',
					p: '5px',
					borderRadius: '5px',
					width: '30rem',
				}}
			/>
			<Button variant='contained'>Search</Button>
		</Stack>
	);
};
export default SearchBar;
