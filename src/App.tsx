import React from 'react';
import Input from './components/';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='one-full column'>
						<h1>Rack up</h1>
					</div>
				</div>
				<Input placeholder='some email' type='text' />
			</div>
		</div>
	);
};

export default App;
