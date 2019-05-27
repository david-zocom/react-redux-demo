const increment = step => ({
	type: 'INCREMENT',
	step: step
});
// increment(5)

const decrement = step => ({
	type: 'DECREMENT',
	step  // samma som step:step
})


const ACTIONS = {
	increment: increment,
	decrement: decrement
}

export default ACTIONS;
