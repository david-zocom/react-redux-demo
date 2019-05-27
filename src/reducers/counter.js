const initialState = { numberOfTheBeast: 0 }

const counterReducer = (state = initialState, action) => {
	console.log('counterReducer', state, action);
	switch( action.type ) {
		case 'INCREMENT':
			return {
				...state,
				numberOfTheBeast: state.numberOfTheBeast + action.step
			}

		case 'DECREMENT':
			return {
				...state,
				numberOfTheBeast: state.numberOfTheBeast - action.step
			}

		default:
			return state;
	}
}

export default counterReducer;
