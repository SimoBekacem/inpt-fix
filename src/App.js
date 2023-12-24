import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

//todo : you need to set up the router in order to route between the pages .
import LandingPage from './features/LandingPage/pages/LandingPage.page';
import AdminRoute from './features/Admin/pages/Admin.route';
// import DomandeProcess from './features/DomandeProccess/pages/DomandeProcess.page';

//todo: the header is repeating in all the pages so make it good .

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/admin/*' element={<AdminRoute />} />
			</Routes>
		</>
	);
}

export default App;
