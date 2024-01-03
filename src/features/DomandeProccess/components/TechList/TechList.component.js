import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Stack,
	Typography,
	Checkbox,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	ListItem,
	List,
} from '@mui/material';

import { techListLabels } from '../../constants/stepperLables.constant';

import { addTechName } from '../../slices/requestList.slice';

const TechList = ({ requestId }) => {
	const [checked, setChecked] = React.useState([]);
	const [technician, setTechnician] = React.useState([]);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(addTechName({ id: requestId, names: checked }));
	}, [checked]);

	const handleToggle = (value) => () => {
		const currentIndexChecked = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndexChecked === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndexChecked, 1);
		}

		const currentIndexTechnecian = technician.indexOf(value);
		const newTechnician = [...technician];
		if (currentIndexTechnecian === -1) {
			newTechnician.push(`${value.firstName} ${value.lastName}`);
		} else {
			newTechnician.splice(currentIndexTechnecian, 1);
		}

		setChecked(newChecked);
		setTechnician(newTechnician);

		// Assuming your API endpoint for updating technicians is '/api/updateTechnicians'
		const apiEndpoint = 'http://localhost:8000/api/technicians';

		// Make a POST request to the API with the list of technicians
		fetch(apiEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ technicianNames: newTechnician }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('API response:', data);
				// Handle the response as needed
			})
			.catch((error) => {
				console.error('Error posting technicians:', error);
				// Handle the error
			});
	};

	return (
		<Stack justifyContent={'center'} alignItems={'center'}>
			<List
				sx={{
					width: '70%',
					bgcolor: 'background.paper',
				}}
			>
				{techListLabels.map((label) => {
					const labelId = `checkbox-list-label-${label.id}`;

					return (
						<ListItem key={label.id}>
							<ListItemButton
								role={undefined}
								onClick={handleToggle(label)}
								dense
							>
								<ListItemIcon>
									<Checkbox
										edge='start'
										checked={checked.indexOf(label) !== -1}
										value={`${label.firstName}   ${label.lastName}`}
										tabIndex={-1}
										disableRipple
										inputProps={{
											'aria-labelledby': labelId,
										}}
									/>
								</ListItemIcon>
								<ListItemText
									id={labelId}
									primary={
										<Typography variant='h5'>{`${label.firstName}   ${label.lastName}`}</Typography>
									}
									secondary={
										<Typography>
											{label.roleService}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Stack>
	);
};

export default TechList;
