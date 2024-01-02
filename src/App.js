import React from 'react';
import { Routes, Route } from 'react-router-dom';

//todo : you need to set up the router in order to route between the pages .
import LandingPage from './features/LandingPage/pages/LandingPage.page';

import AdminRoute from './features/Admin/pages/Admin.route';

import ApplicantPage from './features/DomandeProccess/pages/Applicant.page';
import ManagerPage from './features/DomandeProccess/pages/Manager.page';
import TechnicianPage from './features/DomandeProccess/pages/Technician.page';
import StoreManagerPage from './features/DomandeProccess/pages/StoreManager.page';

import ApplicantCreateRequestPage from './features/DomandeProccess/pages/ApplicantCreateRequest.page';
import ApplicantReadRequestPage from './features/DomandeProccess/pages/ApplicantReadRequest.page';
import ApplicantUpdateRequestPage from './features/DomandeProccess/pages/ApplicantUpdateRequestPage.page';

import ManagerDelegateRequest from './features/DomandeProccess/pages/ManagerDelegateRequest.page';

import TechnicainSeeRequestPage from './features/DomandeProccess/pages/TechnicianSeeRequest.page';

import StorageSeePeacesPage from './features/DomandeProccess/pages/StorageSeePeaces.page';

// import DomandeProcess from './features/DomandeProccess/pages/DomandeProcess.page';

//todo: the header is repeating in all the pages so make it good .

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />

				<Route path='/admin/*' element={<AdminRoute />} />

				<Route path='/applicant'>
					<Route index element={<ApplicantPage />} />
					<Route
						path='createRequest'
						element={<ApplicantCreateRequestPage />}
					/>
					<Route
						path='readRequest/:requestId'
						element={<ApplicantReadRequestPage />}
					/>
					<Route
						path='updateRequest/:requestId'
						element={<ApplicantUpdateRequestPage />}
					/>
				</Route>

				<Route path='/manager'>
					<Route index element={<ManagerPage />} />
					<Route
						path='delegateRequest/:requestId'
						element={<ManagerDelegateRequest />}
					/>
				</Route>

				<Route path='/technician'>
					<Route index element={<TechnicianPage />} />
					<Route
						path='seeRequest/:requestId'
						element={<TechnicainSeeRequestPage />}
					/>
				</Route>
				<Route path='/storeManager'>
					<Route index element={<StoreManagerPage />} />
					<Route
						path='seePeaces/:requestId'
						element={<StorageSeePeacesPage />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
