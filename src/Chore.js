import React from 'react';

// TODO: color-code based on how long overdue
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

const DAY_MILLIS = 1000*3600*24;

function formatToNext({ lastDone, dueDays }) {
	// Return string of how long until next due date. Will show negative number if overdue. lastDone=datestring, dueDays=number
	if( !lastDone || !dueDays ) return 'No due date';
	let nextDueTime = (new Date(lastDone)).getTime() + dueDays * DAY_MILLIS;
	let todayTime = (new Date()).getTime();
	return timeString(nextDueTime - todayTime);
}
function formatDueDays(maybeDays) {
	// How often this event is expected to occur. maybeDays=number or null
	if( !maybeDays ) {
		return '';
	} else if( maybeDays < 1 ) {
		return 'More than once a day'
	} else if( maybeDays < 2 ) {
		return 'Every day'
	} else {
		return `Every ${maybeDays} days`;
	}
}

// function daysBetween(t1, t2) {
// 	let diff = ((new Date(t2)).getTime() - (new Date(t1)).getTime())
// 	 	/ DAY_MILLIS;
// 	return diff;
// }
function daysToNextDue(doneString, days) {
	// Returns days until next due date as a number
	let lastTime = new Date(doneString).getTime();
	let nextTime = lastTime + days * DAY_MILLIS;
	let todayTime = new Date().getTime();
	let daysLeft = (nextTime - todayTime) / DAY_MILLIS;

	return daysLeft;
}
function dueClass(dueDays, lastDone) {
	// Returns a CSS class string. Overdue event -> red bg
	if( !dueDays || !lastDone ) return '';
	let daysLeft = daysToNextDue(lastDone, dueDays);
	if( daysLeft < 0 ) {
		return ' overdue';
	} else if( daysLeft < 1 ) {
		return ' soon';
	} else {
		return '';
	}
}
function displayTime(dateString) {
	// Return a string of time units, based on time left until a datestring.
	let diff = (new Date()).getTime() - (new Date(dateString)).getTime();
	return timeString(diff);
}
function timeString(time) {
	// Return a string of time units. "1h, 7min"
	if( time < 0 ) return '-' + timeString(-time);

	let seconds = Math.ceil(time / 1000);
	if( seconds < 60 ) return `${seconds}s`;

	let minutes = Math.floor(seconds / 60), secMod = seconds % 60;
	if( minutes < 60 ) return `${minutes}min, ${secMod}s`;

	let hours = Math.floor(minutes / 60), minMod = minutes % 60;
	if( hours < 24 ) return `${hours}h, ${minMod}min`;

	let days = Math.floor(hours / 24), hourMod = hours % 24;
	if( days < 14 ) return `${days}d, ${hourMod}h`;

	return `More than ${days}d`;
}

export default Chore;
