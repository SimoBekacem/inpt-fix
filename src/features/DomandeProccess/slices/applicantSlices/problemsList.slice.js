import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	problemType: [],
};

export const problemListSlice = createSlice({
	name: 'problemList',
	initialState,
	reducers: {
		setProblemListValue: (state, action) => {
			const item = action.payload;

			// Use a Set for faster lookups
			const problemTypeSet = new Set(state.problemType);

			if (!problemTypeSet.has(item)) {
				state.problemType = [...state.problemType, item];
			} else {
				// Use filter instead of indexOf and splice
				state.problemType = state.problemType.filter(
					(type) => type !== item
				);
			}
		},
	},
});

export const { setProblemListValue } = problemListSlice.actions;

export default problemListSlice.reducer;
