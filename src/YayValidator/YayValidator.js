import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = { hasYay: false }
		this.ChangeYay = this.ChangeYay.bind(this);
	}
	ChangeYay(e) {
		const { value } = e.target;
		if (value === 'yay') {
			this.setState({ hasYay: true });
		} else {
			this.setState({ hasYay: false });
		}
	}
	render() {
		return (
			<div className="YayValidator" className={this.state.hasYay ? 'green' : null}>
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className="text-box" onChange={this.ChangeYay} />
			</div>
		)
	}
}

export default YayValidator;
