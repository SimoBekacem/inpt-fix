import { configureStore } from '@reduxjs/toolkit';

import creationFormReducer from '../features/DomandeProccess/slices/creationForm.slice';
import requestListReducer from '../features/DomandeProccess/slices/requestList.slice';

export const store = configureStore({
	reducer: {
		creationForm: creationFormReducer,
		requestList: requestListReducer,
	},
});
