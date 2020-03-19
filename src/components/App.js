import React, { Component } from 'react';
import CurDate from './Date';
import Crew from './Crew';
import Map from './Map';


class App extends Component {
  render() {
	return (

		<main className="wrapper">
			
			<Map />

			<aside className="tracker-aside">
				<CurDate />
				<Crew />
			</aside>
		</main>

	);
  }
}

export default App;