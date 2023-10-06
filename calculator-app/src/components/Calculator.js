import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Keypad from './Keypad';
import Display from './Display';
import { clearInput, evaluateInput, setInput } from '../redux/calculatorSlice';

const Calculator = () => {
	const dispatch = useDispatch();
	const input = useSelector((state) => state.calculator.input);

	const handleButtonClick = (value) => {
		if (value === '=') {
			dispatch(evaluateInput());
		} else if (value === 'AC') {
			dispatch(clearInput());
		} else {
			dispatch(setInput(value));
		}
	};

	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item xs={12}>
				<Display input={input} />
			</Grid>
			<Grid item xs={12}>
				<Keypad handleButtonClick={handleButtonClick} />
			</Grid>
		</Grid>
	);
};

export default Calculator;
