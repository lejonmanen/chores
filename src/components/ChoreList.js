import React from 'react';
import Chore from './Chore.js';

// TODO: sort by last done date
const ChoreList = ({ chores, remove, didIt }) => (
	<div className="chore-list">
		{chores.map(c => (
			<Chore
				c={c}
				didIt={didIt}
				remove={remove}
				key={c.title + c.lastDone}
				dueDays={c.dueDays}
				nextDue={c.nextDue}
				/>)
		)}
	</div>
);

export default ChoreList;
