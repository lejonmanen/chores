import React from 'react';
import withLocalStorage from './withLocalStorage.js';

class AddChore extends React.Component {
	state = {
		title: '',
		lastDone: ''
	}
	render() {
		// const textChange = key => e => { let o = {}; o[key] = e.target.value; this.setState(o); };
		const changeTitle = e => this.setState({ title: e.target.value });
		const changeDone  = e => this.setState({ lastDone: e.target.value });
		const t = this.state.title, ld = this.state.lastDone;
		const add = e => this.props.addChore(t, ld);
		return (
			<div className="add-chore">
				Add a new task <br/>
				<input type="text" placeholder="Title"
					onChange={changeTitle}
					value={this.state.title} />
				<br/>

				<input type="text" placeholder="Last done"
					onChange={changeDone}
					value={this.state.lastDone}
					onKeyDown={e => e.keyCode === 13 ? add(e) : ''}
					/>
				<button onClick={this.setNow}>Now</button>
				<br/>

				<button onClick={add}>Add task</button>
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
}

export default withLocalStorage(AddChore);
