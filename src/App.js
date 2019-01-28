import React, { Component } from 'react';
import './App.css';
import AddChore from './AddChore.js';
import ChoreList from './ChoreList.js';
import withLocalStorage from './withLocalStorage';


class App extends Component {
	constructor(props) {
		super(props);
		let data = props.loadFromStorage('chores');
		if( !data ) {
			localStorage.setItem('chores', JSON.stringify([]));
		}
		let fromJson = [];
		if( data ) {
			try {
				fromJson = JSON.parse(data);
			} catch (e) {
				fromJson = [];
			}
		}
		this.state = {
			chores: fromJson
		}
	}
	render() {
		return (
			<div className="App">
				<AddChore addChore={this.addNewChore} />
				<ChoreList chores={this.state.chores} remove={this.removeChore} />
			</div>
		);
	}
	addNewChore = (title, lastDone) => {
		if( !this.state.chores.find(c => c.title === title && c.lastDone === lastDone) ) {
			const newList = [...this.state.chores, { title, lastDone } ];
			this.saveList(newList);
		}
	}
	removeChore = (title, lastDone) => {
		const newList = this.state.chores.filter(c => c.title !== title || c.lastDone !== lastDone);
		this.saveList(newList);
	}
	saveList = list => {
		this.setState({ chores: list });
		this.props.saveToStorage('chores', JSON.stringify(list));
	}
}



export default withLocalStorage(App);
