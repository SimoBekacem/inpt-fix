import React from 'react';
import { CssBaseline } from '@mui/material';

import Landing_page from './features/Landing_page/pages/Landing_page.page';
import ProfileCreatoPage from './features/Admin/Admin_ProfileCreator/pages/ProfileCreator.page';
import RolesCreatorPage from './features/Admin/Admin_RolesCreator/pages/RolesCreator.page';

function App() {
	return (
		<>
			<CssBaseline />
			<RolesCreatorPage />
		</>
	);
}

export default App;
