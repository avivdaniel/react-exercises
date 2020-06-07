import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: [] };
		this.addtask = this.addtask.bind(this);
		this.task = React.createRef();
	}
	addtask(e) {
		e.preventDefault();
		const newTask = this.task.current.value;
		console.log(newTask)
		if (newTask !== '') {
			this.setState({ tasks: [...this.state.tasks, newTask] });
		}
	}
	render() {
		return (
			<div className="Tasks">
				<form onSubmit={this.addtask}>
					<h3>Tasks:</h3>
					<p>Make a Todo list (add only):</p>
					<input placeholder="Your task..." ref={this.task} /> <button>Add task</button>
				</form>
				{this.state.tasks.map((task, index) => {
					return <li key={index}>{task}</li>
				})}

			</div>
		)
	}
}

export default Tasks;
