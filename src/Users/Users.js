import React, { Component } from 'react';
import './Users.scss';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = { users: [] };
	}
	componentDidMount() {
		fetch('https://react-exercises.free.beeceptor.com/users')
			.then(response => response.json())
			.then(users => {
				console.log(users)
				this.setState({ users: users });
			})
			.catch(err => console.log(err));
	}
	render() {
		return (
			<div className="Users">
				<h3>Users:</h3>
				<p>
					Use the following API to make a list of user names:<br />
					<code>https://react-exercises.free.beeceptor.com/users</code>
				</p>
				<ul>
					{this.state.users.map((user, index) => {
						return <li key={index}>{user.name}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Users;
