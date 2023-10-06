import React from 'react';
import { Container, Grid, Paper, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput } from '../store/actions';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector((state) => state.inputValue);

	const handleButtonClick = (value) => {
		dispatch(updateInput(value));
	};

	return (
		<Container maxWidth="sm">
			<Paper elevation={3} style={{ padding: '20px' }}>
				<Display value={inputValue} />
				<Keypad handleButtonClick={handleButtonClick} />
			</Paper>
		</Container>
	);
};

export default Calculator;
