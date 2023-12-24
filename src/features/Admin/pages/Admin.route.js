import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfileCreatorPage from './ProfileCreator.page';
import RolesCreatorPage from './RolesCreator.page';

const AdminRouter = () => {
	return (
		<Routes>
			<Route path='/people' element={<ProfileCreatorPage />} />
			<Route path='/roles' element={<RolesCreatorPage />} />
		</Routes>
	);
};

export default AdminRouter;
