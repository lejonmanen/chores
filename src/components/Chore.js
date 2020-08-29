import React from 'react';
import { formatToNext, formatDueDays, dueClass, displayTime } from './datefunctions.js';

// TODO: add datepicker
// TODO: add checkbox and trashbin icons instead of boring buttons
const Chore = ({ c, remove, didIt }) => (
	<div className={"chore" + dueClass(c.dueDays, c.lastDone)}>
		<div className="borderText">
			<div>{c.title}</div>
			<div title="Last done">{displayTime(c.lastDone)}</div>
		</div>
		<div className="discreet borderText">
			<div title="How often">{formatDueDays(c.dueDays)}</div>
			<div title="Time to next">{formatToNext(c)}</div>
		</div>
		<button onClick={() => didIt(c)}>Did it!</button>
		<button onClick={e => remove(c.title, c.lastDone)} className="ghost">Remove</button>
	</div>
)


export default Chore;
