import React from 'react';
import withLocalStorage from './withLocalStorage.js';

// TODO: improve "now" and "add task" buttons
// TODO: set expected due date (optional)

class AddChore extends React.Component {
	state = {
		title: '',
		lastDone: '',
		disableRemove: false,
		dueDays: 0,
		nextDue: null
	}
	render() {
		// const textChange = key => e => { let o = {}; o[key] = e.target.value; this.setState(o); };
		const changeTitle = e => this.setState({ title: e.target.value });
		const changeDone  = e => this.setState({ lastDone: e.target.value });
		const changeDue = e => {
			// if( isNaN(+e.target.value) ) return;
			this.setState({
				dueDays: e.target.value,
				nextDue: this.getNextDue(e.target.value)
			})
		};
		const t = this.state.title, ld = this.state.lastDone;
		const dd = this.state.dueDays, nd = this.state.nextDue;
		const add = e => this.props.addChore(t, ld, dd, nd);
		return (
			<div className="add-chore">
				Add a new task
				<div className="grid">
				<input type="text" placeholder="Title"
					onChange={changeTitle}
					value={this.state.title} />

				<div className="row">
				<input type="text" placeholder="Last done"
					onChange={changeDone}
					value={this.state.lastDone}
					onKeyDown={e => e.keyCode === 13 ? add(e) : ''}
					/>
				<button onClick={this.setNow}>Now</button>
				</div>


				<input type="number"
					placeholder="Days"
					title="Expected number of days between events"
					onChange={changeDue}
					value={this.state.dueDays}
					/>

				<button onClick={add}>Add task</button>
				</div>
			</div>
		) // TODO: fixa så enter funkar i "last done"
	}
	setNow = e => {
		this.setState({ lastDone: this.getNowString() });
	}
	getNowString = () => {
		let now = new Date();
		return now.toISOString();
	}
	getNextDue = (days) => {
		if( isNaN(+days) ) return null;
		let when = new Date((new Date()).getTime() + 3600*24*1000*days);
		// console.log('getNextDue change event:', days, when.toISOString());
		return when.toISOString();
	}
}

export default withLocalStorage(AddChore);
