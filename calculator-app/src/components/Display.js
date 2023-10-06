import React from 'react';
import { Paper, Typography } from '@mui/material';

const Display = ({ value }) => {
	return (
		<Paper variant="outlined" square style={{ padding: '10px', marginBottom: '10px' }}>
			<Typography variant="h4" component="div" align="right">
				{value}
			</Typography>
		</Paper>
	);
};

export default Display;
