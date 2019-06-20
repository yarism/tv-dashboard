import React from 'react';
import { MapPin } from 'react-feather';

export default class Clock extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			time: new Date().toLocaleTimeString(['en-GB'], {hour: '2-digit', minute:'2-digit'})
		}
	}
	
	componentDidMount() {
		setInterval(this.update, 1000)
	}
	
	update = () => {
		this.setState({
			time: new Date().toLocaleTimeString(['en-GB'], {hour: '2-digit', minute:'2-digit'})
		})
	};
	
	render() {
		return (
            <div className="clock__container">
                <span className="clock" style={{  }}>{this.state.time}</span>
				<div className="location"><MapPin size={18} /><span>MATCHi Padel, Hedemora</span></div>
            </div>
		)
	}
}