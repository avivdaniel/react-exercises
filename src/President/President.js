import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			],
			currentPresident: null
		};
	}
	changeCurrentPresident(newPresident) {
		this.setState({ currentPresident: newPresident });
	}
	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, index) => {
						return <img onClick={this.changeCurrentPresident.bind(this, president)} key={index} src={require('./images/' + president.image)} alt="" />
					})}
				</div>
				<div>
					<strong>You selected: </strong> {this.state.currentPresident !== null ? this.state.currentPresident.firstName + ' ' + this.state.currentPresident.lastName : 'Full name here'}
				</div>
			</div>
		)
	}
}

export default President;
