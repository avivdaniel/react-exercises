import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.',
			isToggle: false,
			toggleText: ''
		};
		this.toggleText = this.toggleText.bind(this);
	}
	toggleText() {
		this.setState({ isToggle: !this.state.isToggle })
	}
	cuttingWords(text, maxLength) {
		let chortenText = text.substr(0, maxLength);
		if (text.length <= maxLength) {
			return text;
		}
		if (chortenText.charAt(maxLength) === ' ') {
			return chortenText;
		}
		return chortenText.substr(0, chortenText.lastIndexOf(' '));
	}
	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{!this.state.isToggle ? this.state.text : this.cuttingWords(this.state.text, 100)}
				</p>
				<button onClick={this.toggleText}>Toggle</button>
			</div>
		)
	}
}

export default SmartParagraph;
