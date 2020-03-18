import React, { Component } from 'react';
import CurDate from './Date';


class App extends Component {
  render() {
	return (

		<main className="wrapper">
		<section className="tracker-map">
			
		</section>
		<aside className="tracker-aside">
			<CurDate />
		</aside>
	  </main>

	);
  }
}

export default App;