import React from 'react';

const CurrentLoc = ({coords}) => {
	return (
		<div className="tracker-location">
			<h4 className="tracker-location__name">ISS is now located at:</h4>
			<span className="tracker-location__values">
				<span className="tracker-location__lng">longitude: {coords.lng}</span>
				<span className="tracker-location__lat">latitude: {coords.lat}</span>
			</span>
		</div>
	) 
}

export default CurrentLoc;