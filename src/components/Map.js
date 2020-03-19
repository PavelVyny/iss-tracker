import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CurrentLoc from './CurrentLocation';
import markerImg from '../images/marker.png';

const MarkerISS = () => 
<img
	className="tracker-location__marker" 
	src={markerImg} 
	alt="map-marker"
/>

class Map extends Component {
  static defaultProps = {
	defaultCenter: {
	  lat: 0,
	  lng: 0,
	},
	zoom: 4,
  };

  constructor(props) {
	super(props);

	const { lat, lng } = props.defaultCenter;

	this.state = {
	  coords: { lat, lng }
	};

  }

  componentDidMount() {
	this.getCoords();
	this.intervalId = setInterval(() => {
	  this.getCoords();
	}, 5000);
  }

  componentWillUnmount() {
	clearInterval(this.intervalId);
  }

  getCoords() {
	fetch('https://api.wheretheiss.at/v1/satellites/25544')
	  .then(res => res.json())
	  .then(({ latitude, longitude }) => ({
		lat: parseFloat(latitude).toFixed(3),
		lng: parseFloat(longitude).toFixed(3),
	  }))
	  .then(coords => {
		this.setState({ coords });
	  })
	  .catch(error => {
		this.setState({ error });
	  });
  }

  render() {
	const { defaultCenter, zoom } = this.props;
	const { coords } = this.state;
	const {lat, lng} = coords;
	const { error } = this.state;

	if (error) {
	  return (
		<div className="warning">
		  Houston, we have a problem...
		</div>
	  );
	}
	return (
		<section className="tracker">
			<CurrentLoc coords={coords}/>
			<div className="tracker-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyCXe1_8WnZgtmdmGQY5BIV5cnrBcchnJ5U' }}
					center={coords}
					defaultZoom={zoom}
					defaultCenter={defaultCenter}
				> 
				<MarkerISS lat={lat} lng={lng}/>
				</GoogleMapReact>
			</div>
		</section>
	);
  }
}

export default Map;