import React from 'react';
import picture from '../images/astronaut.png';

const CrewMember = ({member}) => {
	return (
		<div className="crew__member">
			<img className="crew__picture" src={picture}></img>
			<div className="crew__member-name">{member.name}</div>
		</div>
	)
}

export default CrewMember;