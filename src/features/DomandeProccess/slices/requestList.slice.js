import { createSlice } from '@reduxjs/toolkit';
const problemTestImage = require('../../../assets/problemImageTest.png');

const initialState = {
	value: {
		requests: [
			{
				id: 'Problem-MZDRNF1887',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 10,
					subDepartement: 10,
				},
				readedByManager: false,
				deleted: true,
			},
			{
				id: 'Problem-HPR2GHOVRC',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
				deleted: false,
			},
			{
				id: 'Problem-7ZXT64KZGK',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
				deleted: false,
			},
			{
				id: 'Problem-QGZFNXKWNP',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'departement B',
					subDepartement: 'class B110',
				},
				readedByManager: false,
				deleted: false,
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
		deleteRequest: (state, action) => {
			const requestId = action.payload;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			state.value.requests[index].deleted = true;
		},
	},
});

export const { addNewRequest, deleteRequest } = requestListSlice.actions;

export default requestListSlice.reducer;
