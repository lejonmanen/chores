/* eslint-disable react/prop-types */
import { formatToNext, formatDueDays, dueClass, displayTime } from '../utils/datefunctions.js';

// TODO: add datepicker
// TODO: add checkbox and trashbin icons instead of boring buttons
const Chore = ({ c, remove, didIt, moveUp }) => (
	<div className={"chore" + dueClass(c.dueDays, c.lastDone)}>
		<div className="borderText">
			<div>{c.title}</div>
			<div title="Time to next">{formatToNext(c)}</div>
		</div>
		<div className="discreet borderText">
			<div title="How often">{formatDueDays(c.dueDays)}</div>
			<div title="Last done">{displayTime(c.lastDone)}</div>
		</div>
		<button onClick={() => didIt(c)}>Did it!</button>
		<button onClick={() => remove(c.title, c.lastDone)} className="ghost">Remove</button>
		{moveUp ? <button className="ghost" onClick={() => moveUp(c)}>Move up</button> : null}

	</div>
)


export default Chore;
