import React from 'react';
import { Grid, Button } from '@mui/material';

const Keypad = ({ handleButtonClick }) => {
	const buttons = [
		'7', '8', '9', '+',
		'4', '5', '6', '-',
		'1', '2', '3', '*',
		'AC', '0', '.', '/',
		'=',
	];

	return (
		<Grid container spacing={1}>
			{buttons.map((button) => (
				<Grid item xs={3} key={button}>
					<Button
						variant="outlined"
						fullWidth
						onClick={() => handleButtonClick(button)}
					>
						{button}
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default Keypad;
