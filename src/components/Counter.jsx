import React from 'react';
import { connect } from 'react-redux';

import ACTIONS from '../actions/actions.js';

const Counter = props => {
	// props innehåller dispatch(action)
	console.log('Counter component, props=', props);
	const increase = () => {
		let action = ACTIONS.increment(10);
		props.dispatch(action);
	}
	const decrease = () => {
		let action = ACTIONS.decrement(5);
		props.dispatch(action);
	}
	return (
		<div>
			The value is: {props.value} <br/>
			<button onClick={increase}> +1 </button>
			<button onClick={decrease}> -1 </button>
		</div>
	)
}
let mapStateToProps = state => ({
	value: state.numberOfTheBeast
});
export default connect(mapStateToProps)(Counter);





//
