import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		requests: [
			{
				id: 'Problem-MZDRNF1887',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: '../../../assets/problemImageTest.png',
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
			},
			{
				id: 'Problem-HPR2GHOVRC',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: '../../../assets/problemImageTest.png',
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
			},
			{
				id: 'Problem-7ZXT64KZGK',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: '../../../assets/problemImageTest.png',
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
			},
			{
				id: 'Problem-QGZFNXKWNP',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: '../../../assets/problemImageTest.png',
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
			},
		],
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
