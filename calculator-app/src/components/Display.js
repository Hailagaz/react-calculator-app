import React from 'react';
import { Typography, Paper } from '@mui/material';

const Display = ({ input }) => {
	return (
		<Paper variant="outlined" elevation={3} style={{ padding: '1rem' }}>
			<Typography variant="h5" align="right">
				{input}
			</Typography>
		</Paper>
	);
};

export default Display;
