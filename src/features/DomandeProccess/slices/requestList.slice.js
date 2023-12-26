import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		requests: [],
	},
};

export const requestListSlice = createSlice({
	name: 'creationFromData',
	initialState,
	reducers: {
		addNewRequest: (state, action) => {
			const newRequest = action.payload;
			state.value.requests.push(newRequest);
		},
	},
});

export const { addNewRequest } = requestListSlice.actions;

export default requestListSlice.reducer;
