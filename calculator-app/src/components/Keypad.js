import React from 'react';
import { Grid, Button } from '@mui/material';

const Keypad = ({ handleButtonClick }) => {
	const buttonClick = (value) => {
		handleButtonClick(value);
	};

	return (
		<Grid container spacing={1}>
			<Grid item xs={3}>
				<Button variant="outlined" fullWidth onClick={() => buttonClick('7')}>
					7
				</Button>
			</Grid>
			<Grid item xs={3}>
				<Button variant="outlined" fullWidth onClick={() => buttonClick('8')}>
					8
				</Button>
			</Grid>
			<Grid item xs={3}>
				<Button variant="outlined" fullWidth onClick={() => buttonClick('9')}>
					9
				</Button>
			</Grid>
			<Grid item xs={3}>
				<Button variant="outlined" fullWidth onClick={() => buttonClick('+')}>
					+
				</Button>
			</Grid>
			{/* Add more buttons for 0-9, -, *, /, . */}
		</Grid>
	);
};

export default Keypad;
