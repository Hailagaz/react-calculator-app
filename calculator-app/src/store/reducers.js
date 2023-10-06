const initialState = {
	inputValue: '0',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_INPUT':
			return {
				...state,
				inputValue: state.inputValue === '0' ? action.payload : state.inputValue + action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
