import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Keypad from './Keypad';
import Display from './Display';
import { clearInput, evaluateInput, setInput } from '../redux/calculatorSlice';

const CalculatorButton = styled('button')`
  background-color: #f0f0f0;
  color: #333;
  font-size: 24px;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const CalculatorContainer = styled(Paper)`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

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

	useEffect(() => {
		const handleKeyPress = (event) => {
			const keyValue = event.key;

			if (keyValue.match(/[0-9+\-*/.=]|Enter|Backspace/)) {
				event.preventDefault();

				if (keyValue === '=' || keyValue === 'Enter') {
					dispatch(evaluateInput());
				} else if (keyValue === 'Backspace') {
					dispatch(clearInput());
				} else {
					handleButtonClick(keyValue);
				}
			}
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item xs={12}>
				<CalculatorContainer>
					<Display input={input} />
					<Keypad handleButtonClick={handleButtonClick} CalculatorButton={CalculatorButton} />
				</CalculatorContainer>
			</Grid>
		</Grid>
	);
};

export default Calculator;
