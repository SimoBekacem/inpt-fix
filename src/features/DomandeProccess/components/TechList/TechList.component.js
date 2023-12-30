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
	React.useEffect(() => {
		dispatch(addTechName({ id: requestId, names: checked }));
	}, [checked]);
	const requests = useSelector((state) => state.requestList.value.requests);
	console.log(requests);
	const dispatch = useDispatch();
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
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
