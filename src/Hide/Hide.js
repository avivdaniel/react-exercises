import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {
	constructor(props) {
		super(props);
		this.state = { isShown: true };
		this.hideText = this.hideText.bind(this);
	}
	hideText() {
		this.setState({ isShown: !this.state.isShown })
	}
	render() {
		return (
			<div className="Hide">
				<button onClick={this.hideText}>{this.state.isShown ? 'Hide text now!' : null} </button>
				<p>
					You can read this text,
					but if you click the button it should disappear. Forever.
				</p>
			</div>
		)
	}
}

export default Hide;
