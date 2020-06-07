import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			],
		};
	}
	removeStudent(student) {
		const studentToRm = student;
		const studentList = this.state.students;
		const index = studentList.indexOf(student);
		studentList.splice(index, 1);
		this.setState({ students: studentList });
		console.log(studentToRm, studentList)
	}

	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return <li key={index}>{student} <button onClick={this.removeStudent.bind(this, student)}>Remove</button></li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
