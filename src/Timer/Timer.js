import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 0 };
	}
	onPlay() {
		this.timer = setInterval(() => {
			this.setState({ num: this.state.num + 1 })
		}, 1000)
	}
	onPuse() {
		clearInterval(this.timer);
	}
	onReset() {
		this.setState({ num: 0 });
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.onPlay.bind(this)}>Play</button>
					<button onClick={this.onPuse.bind(this)}>Pause</button>
					<button onClick={this.onReset.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.num}</div>
			</div>
		)
	}
}

export default Timer;
