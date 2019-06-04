import React from 'react';

export default class Clock extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
		}
	}
	
	componentDidMount() {
		setInterval(this.update, 1000)
	}
	
	update = () => {
		this.setState({
			time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
		})
	};
	
	render() {
		return (
			<h1>{this.state.time}</h1>
		)
	}
}