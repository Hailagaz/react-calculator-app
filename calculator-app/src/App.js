import React from 'react';
import Calculator from './components/Calculator';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="App">
				<Calculator />
			</div>
		</ThemeProvider>
	);
}

export default App;
