import React from 'react';
import { CssBaseline } from '@mui/material';

import Landing_page from './features/Landing_page/pages/Landing_page.page';
import ProfileCreatoPage from './features/Admin/pages/ProfileCreator.page';
import RolesCreatorPage from './features/Admin/pages/RolesCreator.page';
import DomandeCreatoPage from './features/Demandeur/pages/DomandeCreator.page';
function App() {
	return (
		<>
			<CssBaseline />
			<DomandeCreatoPage />
		</>
	);
}

export default App;
