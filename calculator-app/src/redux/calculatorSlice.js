import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		input: '',
	},
	reducers: {
		setInput: (state, action) => {
			state.input += action.payload;
		},
		clearInput: (state) => {
			state.input = '';
		},
		evaluateInput: (state) => {
			try {
				state.input = eval(state.input).toString();
			} catch (error) {
				state.input = 'Error';
			}
		},
	},
});

export const { setInput, clearInput, evaluateInput } = calculatorSlice.actions;

export default calculatorSlice.reducer;
