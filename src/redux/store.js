import { configureStore } from '@reduxjs/toolkit';

import creationFormReducer from '../features/DomandeProccess/slices/creationForm.slice';
import requestListReducer from '../features/DomandeProccess/slices/requestList.slice';
import problemsListReducer from '../features/DomandeProccess/slices/applicantSlices/problemsList.slice';

export const store = configureStore({
	reducer: {
		problemsList: problemsListReducer,
		creationForm: creationFormReducer,
		requestList: requestListReducer,
	},
});
