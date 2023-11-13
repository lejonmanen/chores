/* eslint-disable react/prop-types */
import Chore from './Chore.jsx';

// TODO: sort by last done date
const ChoreList = ({ chores, remove, didIt, moveUp }) => (
	<div className="chore-list">
		{chores.map((c, index) => (
			<Chore
				c={c}
				didIt={didIt}
				remove={remove}
				moveUp={index > 0 ? moveUp : null}
				key={c.title + c.lastDone}
				dueDays={c.dueDays}
				nextDue={c.nextDue}
				/>)
		)}
	</div>
);

export default ChoreList;
