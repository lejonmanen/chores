import React, { Component } from 'react';
import AddChore from './components/AddChore.js';
import ChoreList from './components/ChoreList.js';
import withLocalStorage from './utils/withLocalStorage';


// TODO: "refresh" button

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
			chores: fromJson,
			refreshCounter: 0
		}
	}
	render() {
		const position = {
			position: 'absolute', right: '0px', bottom: '0px', margin: '0px'
		}
		return (
			<div className="App">
				<button onClick={this.refresh} style={position}>Refresh</button>
				<AddChore addChore={this.addNewChore} />
				<ChoreList chores={this.state.chores}
					remove={this.removeChore}
					didIt={this.didIt}
					moveUp={this.moveUp} />
			</div>
		);
	}

	refresh = () => {
		this.setState({ refreshCounter: this.refreshCounter + 1 })
	}
	didIt = chore => {
		this.saveList(this.state.chores.map(
			c => {
				if( this.sameChore(c, chore) ) {
					return { ...c, lastDone: new Date().toISOString() };
				}
				return c;
			})
	 	);
	}
	moveUp = chore => {
		console.log('Hello');
		const newList = [...this.state.chores]
		const fromIndex = newList.findIndex(c => this.sameChore(c, chore))
		newList[fromIndex] = this.state.chores[fromIndex - 1]
		newList[fromIndex - 1] = this.state.chores[fromIndex]
		this.saveList(newList)
	}
	sameChore = (c1, c2) => c1.title === c2.title && c1.lastDone === c2.lastDone

	addNewChore = (title, lastDone, dueDays, nextDue) => {
		console.log('Add new', dueDays, nextDue);
		if( !this.state.chores.find(c => this.sameChore(c, { title, lastDone })) ) {
			const newList = [...this.state.chores, { title, lastDone, dueDays, nextDue } ];
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
