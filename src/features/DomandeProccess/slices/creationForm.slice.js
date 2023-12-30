import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		id: 'Problem-' + Math.random().toString(36).substr(2, 20),
		problemType: [],
		descreption: '',
		image: '',
		date: new Date(),
		localisation: {
			departement: '',
			subDepartement: '',
		},
		readedByManager: false,
		deleted: false,
	},
};

export const creationFormSlice = createSlice({
	name: 'creationFromData',
	initialState,
	reducers: {
		setProblemListValue: (state, action) => {
			const item = action.payload;
			if (!state.value.problemType.includes(item)) {
				state.value.problemType = [...state.value.problemType, item];
			} else {
				const index = state.value.problemType.indexOf(item);
				if (index > -1) {
					//?: only splice array when item is found
					const checkList = state.value.problemType;
					checkList.splice(index, 1);
					state.value.problemType = checkList;
					//?: 2nd parameter means remove one item only
				}
			}
		},

		setDescriptionValue: (state, action) => {
			const descreption = action.payload;
			state.value.descreption = descreption;
		},

		setLocalisationValue: (state, action) => {
			const departement = action.payload;
			state.value.localisation = {
				...state.value.localisation,
				...departement,
			};
		},

		setImageValue: (state, action) => {
			const imageSrc = action.payload;
			state.value.image = imageSrc;
		},
		ressetValues: (state) => {
			state.value = {
				id: 'Problem-' + Math.random().toString(36).substr(2, 20),
				problemType: [],
				descreption: '',
				image: '',
				date: new Date(),
				localisation: {
					departement: '',
					subDepartement: '',
				},
				readedByManager: false,
				deleted: false,
			};
		},
	},
});

export const {
	setProblemListValue,
	setDescriptionValue,
	setLocalisationValue,
	setImageValue,
	ressetValues,
} = creationFormSlice.actions;

export default creationFormSlice.reducer;
