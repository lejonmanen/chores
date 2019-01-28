import React from 'react';

// TODO: add datepicker
// TODO: click on "did it" to reset timestamp
const Chore = ({ c, remove }) => (
	<div>
		{c.title} {c.lastDone}
		<button onClick={() => {}}>Did it!</button>
		<button onClick={e => remove(c.title, c.lastDone)}>Remove</button>
	</div>
)

export default Chore;
