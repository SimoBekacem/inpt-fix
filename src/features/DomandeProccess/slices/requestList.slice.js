import { createSlice } from '@reduxjs/toolkit';
const problemTestImage = require('../../../assets/problemImageTest.png');

const initialState = {
	value: {
		requests: [
			{
				id: 'Problem-MZDRNF1887',
				needPeaces: 'Necessite une piece de rechange',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'Batiment B',
					subDepartement: 'Classe 110',
				},
				readedByManager: false,
				deleted: false,
				techNames: [
					{
						id: '1',
						firstName: 'BELKACEM',
						lastName: 'Mohamed',
						roleService: 'Informatique Technician',
					},
				],
			},
			{
				id: 'Problem-HPR2GHOVRC',
				needPeaces: 'Necessite une piece de rechange',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'Batiment B',
					subDepartement: 'Classe 110',
				},
				readedByManager: false,
				deleted: false,
				techNames: [
					{
						id: '1',
						firstName: 'BELKACEM',
						lastName: 'Mohamed',
						roleService: 'Informatique Technician',
					},
				],
			},
			{
				id: 'Problem-7ZXT64KZGK',
				needPeaces: 'Necessite une piece de rechange',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'Batiment B',
					subDepartement: 'Classe 110',
				},
				readedByManager: false,
				deleted: false,
				techNames: [
					{
						id: '1',
						firstName: 'BELKACEM',
						lastName: 'Mohamed',
						roleService: 'Informatique Technician',
					},
				],
			},
			{
				id: 'Problem-QGZFNXKWNP',
				needPeaces: 'Necessite une piece de rechange',
				problemType: ['Mécanique', 'Hydraulique'],
				descreption: 'hello world',
				image: problemTestImage,
				date: new Date(),
				localisation: {
					departement: 'Batiment B',
					subDepartement: 'Classe 110',
				},
				readedByManager: false,
				deleted: false,
				techNames: [
					{
						id: '1',
						firstName: 'BELKACEM',
						lastName: 'Mohamed',
						roleService: 'Informatique Technician',
					},
				],
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
		addTechName: (state, action) => {
			const requestId = action.payload.id;
			const techNames = action.payload.names;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				techNames,
			};
		},
		addDeadLine: (state, action) => {
			const requestId = action.payload.id;
			const Deadline = action.payload.Deadline;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				Deadline,
			};
		},
		addReparationResult: (state, action) => {
			const requestId = action.payload.id;
			const reparationResult = action.payload.reparationResult;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				reparationResult,
			};
		},
		addNeedPeaces: (state, action) => {
			const requestId = action.payload.id;
			const needPeaces = action.payload.needPeaces;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				needPeaces,
			};
		},
		addPeacesList: (state, action) => {
			const requestId = action.payload.id;
			const peacesList = action.payload.peacesList;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				peacesList,
			};
		},
		addTechDescription: (state, action) => {
			const requestId = action.payload.id;
			const techDescreption = action.payload.techDescription;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				techDescreption,
			};
		},
		addStoreDescription: (state, action) => {
			const requestId = action.payload.id;
			const storeDescreption = action.payload.storeDescription;
			const index = state.value.requests.findIndex(
				(obj) => obj.id === requestId
			);
			const oldState = state.value.requests[index];
			state.value.requests[index] = {
				...oldState,
				storeDescreption,
			};
		},
	},
});

export const {
	addNewRequest,
	deleteRequest,
	addTechName,
	addDeadLine,
	addReparationResult,
	addNeedPeaces,
	addTechDescription,
	addPeacesList,
	addPeacesListExist,
	addStoreDescription,
} = requestListSlice.actions;

export default requestListSlice.reducer;
