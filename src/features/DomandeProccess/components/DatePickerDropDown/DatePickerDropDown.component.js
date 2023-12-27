import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

//?: dayjs() give use the currante date but if you put dayjs('2022-04-17') it will display this date 2022-04-17
export default function DatePickerDropDown({ isDisabled, defaultDate }) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				defaultValue={defaultDate ? dayjs(defaultDate) : dayjs()}
				disabled={isDisabled}
			/>
		</LocalizationProvider>
	);
}
