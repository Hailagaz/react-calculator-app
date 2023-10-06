import React from 'react';
import { Container, Typography } from '@mui/material';
import Calculator from './components/Calculator';

function App() {
	return (
		<Container maxWidth="sm" style={{ marginTop: '30vh' }}>
			<Typography variant="h4" align="center" gutterBottom>
				Calculator
			</Typography>
			<Calculator />
		</Container>
	);
}

export default App;
