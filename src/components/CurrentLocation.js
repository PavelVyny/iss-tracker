import React from 'react';

const CurrentLoc = ({coords}) => {
	return (
		<div className="tracker-location">
			<h4 className="tracker-location__name">ISS is now located at:</h4>
			<div className="tracker-location__values">
				<p className="tracker-location__lng">longitude: {coords.lng}</p>
				<p className="tracker-location__lat">latitude: {coords.lat}</p>
			</div>
		</div>
	) 
}

export default CurrentLoc;