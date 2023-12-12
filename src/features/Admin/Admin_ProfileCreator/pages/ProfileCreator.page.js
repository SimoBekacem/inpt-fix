import React from 'react';
import { Grid } from '@mui/material';

import Header from '../../Admin_globale-components/Header/Header.component';
import ProfileForm from '../components/ProfileForm /ProfileForm.component';

const ProfileCreatoPage = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<ProfileForm />
			</Grid>
		</Grid>
	);
};

export default ProfileCreatoPage;
