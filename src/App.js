import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

//todo : you need to set up the router in order to route between the pages .
import Landing_page from './features/Landing_page/pages/Landing_page.page';
import Admin from './features/Admin/pages/Admin.route';
import DomandeProcess from './features/DomandeProccess/pages/DomandeProcess.page';
function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<Landing_page />} />
				<Route path='/admin/*' element={<Admin />} />
			</Routes>
		</>
	);
}

export default App;
