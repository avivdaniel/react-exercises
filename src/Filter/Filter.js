import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			filterChar: ''
		};
		this.filterByValue = this.filterByValue.bind(this);
	}
	filterByValue(e) {
		const { value } = e.target;
		this.setState({ filterChar: value });
	}
	render() {
		return (
			<div className="Filter" >
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.filterByValue} />
				<ul>
					{this.state.items.filter(item => {
						return item.toLowerCase().indexOf(this.state.filterChar.toLowerCase()) > -1;
					})
						.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
				</ul>
			</div>
		)
	}
}

export default Filter;
