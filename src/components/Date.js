import React, {Component} from 'react';

class CurDate extends Component {
	constructor(props){
		super(props);

		this.state = {
			hours: '',
			minutes:'',
			date: ''
		}
	}
	getDate(){
		const options = {
			year: 'numeric',
			day: 'numeric',
			month: 'long',
			weekday: 'long',
			timezone: 'UTC',        
		};
		const date = new Date();
		
		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();
		const seconds = date.getUTCSeconds();

		const newDate = date.toLocaleString("en-US", options);

		this.setState (
			{
				hours: hours,
				minutes: minutes,
				seconds: seconds,
				date: newDate,
			}
		) 
	}
	componentDidMount(){
	  this.intervalId = setInterval(() => {
		this.getDate() 
		}, 5000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	render(){
		const { hours, minutes, seconds, date } = this.state
		return (
			 <div className="date">
				<h2 className="date__head">Current UTC time: 
					<span className="date__time">
						<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
					</span>   
				</h2>
				 <span className="date__full">{date}</span>    
			</div>
					
		);
	}
} 

export default CurDate