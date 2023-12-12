import React from 'react';
import { CssBaseline } from '@mui/material';

import Landing_page from './features/Landing_page/pages/Landing_page.page';
import RolesCreatoPage from './features/Admin_RolesCreator/pages/RolesCreator.page';
import ProfileCreatoPage from './features/Admin/Admin_ProfileCreator/pages/ProfileCreator.page';

function App() {
	return (
		<>
			<CssBaseline />
			<Landing_page />
		</>
	);
}

export default App;
