import React from 'react';

// TODO: add datepicker
// TODO: add checkbox and trashbin icons instead of boring buttons
const Chore = ({ c, remove, didIt }) => (
	<div className="chore">
		<div>
			<div>{c.title}</div>
			<div>{displayTime(c.lastDone)}</div>
		</div>
		<button onClick={() => didIt(c)}>Did it!</button>
		<button onClick={e => remove(c.title, c.lastDone)}>Remove</button>
	</div>
)

function displayTime(done) {
	let diff = (new Date()).getTime() - (new Date(done)).getTime();
	let seconds = Math.ceil(diff / 1000);
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
