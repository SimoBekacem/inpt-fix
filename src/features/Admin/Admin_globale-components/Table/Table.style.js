import { TableCell, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: 'rgb(153	206	176	)',
		color: 'rgb(40	90	125	)',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
export const StyledTableRow = styled(TableRow)(() => ({
	'&:nth-of-type(odd)': {
		backgroundColor: 'rgb(207	233	219	)',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export const headerTypographyStyle = {
	fontSize: '1rem',
	fontWeight: 'bold',
};
