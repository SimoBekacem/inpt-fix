import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfileCreatoPage from './ProfileCreator.page';
import RolesCreatorPage from './RolesCreator.page';

const Admin = () => {
	return (
		<Routes>
			<Route path='/people' element={<ProfileCreatoPage />} />
			<Route
				path='/
			'
				element={<RolesCreatorPage />}
			/>
		</Routes>
	);
};

export default Admin;
