import React from 'react';
import Form from './Components/Form';
import Input from './Components/Input';

import { AppProvider } from './Context/AppContext';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import SubmitButton from './Components/SubmitButton';

const App = () => {
	// console.log(context);

	const user = { name: 'Punal', loggedIn: true };

	return (
		<AppProvider value={user}>
			<div className='App'>
				<div className='container'>
					<div className='row'>
						<div className='one-full column'>
							<section className='spacing-top'>
								<Form>
									<div className='row'>
										<Input placeholder={user.name} />
									</div>
									<div className='row'>
										<SubmitButton
											placeholder='Enter username'
											className='button-primary'
											value='Submit'
											type='submit'
										/>
									</div>
								</Form>
							</section>
						</div>
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

// App.contextType = AppContext;

export default App;
