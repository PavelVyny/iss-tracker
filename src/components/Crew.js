import React, { Component } from 'react';
import CrewMember from './CrewMember';

class Crew extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	}

	getMembers = () =>{
		fetch("http://api.open-notify.org/astros.json")      
		.then(res => res.json())
		.then(
			(allAstros) => {
				const crewISS = allAstros.people.filter(member => member.craft === 'ISS');
				this.setState({
					isLoaded: true,
					items: crewISS,   
				});
			},
			(error) => {
				this.setState({
					isLoaded: false,
					error
				});
			}
		)
		.catch(error => {
			this.setState({ error });
		  });
	}
	componentDidMount(){
		this.getMembers()
		this.intervalId =  setInterval(()=> {
			 this.getMembers()
		},5000)
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	render(){
		const{items} = this.state;
		const {error} = this.state;
		if (error) {
			return (
			  <div className="warning">
				Houston, we lost all astros...
			  </div>
			);
		  }
		return(
			<div className="crew">
				{items.map((member, index) => (
				   <CrewMember key={index} member={member}/>
				))}
			</div>
		);
	}
}

export default Crew;