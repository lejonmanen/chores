import React from 'react';
import Chore from './Chore.js';

// TODO: sort by last done date
const ChoreList = ({ chores, remove }) => (
	<div>
		{chores.map(c => (
			<Chore
				c={c}
				remove={remove}
				key={c.title + c.lastDone}/>)
		)}
	</div>
);

export default ChoreList;
