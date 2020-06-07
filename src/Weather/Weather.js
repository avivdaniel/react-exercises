import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hottestDay: {},
			coldestDay: {}
		}
		this.setHotestDay = this.setHotestDay.bind(this);
		this.setColdestDay = this.setColdestDay.bind(this);

	}
	componentDidMount() {
		fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
			.then(response => response.json())
			.then(days => {
				let hotestDay = days[0];
				let coldestDay = days[0];
				// console.log(days)
				days.forEach(day => {
					if (day.temperature > hotestDay.temperature) {
						hotestDay = day;
						return hotestDay;
					}
					else if (day.temperature < coldestDay.temperature) {
						coldestDay = day;
						return coldestDay;
					}

				})
				this.setHotestDay(hotestDay);
				this.setColdestDay(coldestDay);
			})
			.catch(err => console.log(err));
	}
	setHotestDay(hotestDay) {
		this.setState({ hottestDay: hotestDay });
	}
	setColdestDay(coldestDay) {
		console.log(coldestDay)
		this.setState({ coldestDay: coldestDay }, () => {
			console.log(this.state.coldestDay.day + 'blalllalala')
		});
	}
	generateDayName(day) {
		const daysNames = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		return daysNames[day.day - 1];
	}
	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://my-json-server.typicode.com/evyros/react-weather-app/forecast</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: {this.generateDayName(this.state.hottestDay) + ' (' + this.state.hottestDay.temperature + ')'}</strong>
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: {this.generateDayName(this.state.coldestDay) + ' (' + this.state.coldestDay.temperature + ')'}</strong>
				</div>
			</div>
		)
	}
}

export default Weather;
