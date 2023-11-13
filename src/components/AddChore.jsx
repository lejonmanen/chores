import React from 'react';
import withLocalStorage from '../utils/withLocalStorage';


class AddChore extends React.Component {
	state = {
		title: '',
		lastDone: '',
		disableRemove: false,
		dueDays: 3,
		nextDue: null
	}
	render() {
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
		// eslint-disable-next-line react/prop-types
		const add = () => this.props.addChore(t, ld, dd, nd);
		return (
			<div className="add-chore">
				Add a new task
				<div className="grid">
				<input type="text" placeholder="Title"
					title="Descriptive title for a new task"
					onChange={changeTitle}
					value={this.state.title} />

				<div className="row">
				<input type="text" placeholder="Last done"
					title="When the action was last done"
					onChange={changeDone}
					value={this.state.lastDone}
					onKeyDown={e => e.keyCode === 13 ? add(e) : ''}
					/>
				<button className="ghost" title="Use the current time"
					onClick={this.setNow}>Now</button>
				</div>


				<input type="number"
					title="Expected number of days between events"
					onChange={changeDue}
					value={this.state.dueDays}
					/>

				<button onClick={add}>Add task</button>
				</div>
			</div>
		)
	}
	setNow = () => {
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

const wls = withLocalStorage(AddChore);
export default wls
