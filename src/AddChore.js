import React from 'react';
import withLocalStorage from './withLocalStorage.js';

class AddChore extends React.Component {
	state = {
		title: '',
		lastDone: ''
	}
	render() {
		const textChange = key => e => { let o = {}; o[key] = e.target.value; this.setState(o); };
		const t = this.state.title, ld = this.state.lastDone;
		const add = e => this.props.addChore(t, ld);
		return (
			<div>
				Add a new chore: <br/>
				<input type="text" placeholder="Title" onChange={textChange('title')} /> <br/>

				<input type="text" placeholder="Last done" onChange={textChange('lastDone')}
					onKeyDown={e => e.key === 'enter' ? add(e) : ''}
					/>
				<button>Today</button> <br/>

				<button onClick={add}>Add task</button>
			</div>
		) // TODO: fixa så enter funkar i "last done"
	}
}

export default withLocalStorage(AddChore);
