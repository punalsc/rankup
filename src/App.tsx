import React, { useState, useEffect, ChangeEvent } from 'react';
import Form from './Components/Form';
import Input from './Components/Input';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import SubmitButton from './Components/SubmitButton';

const App = () => {
	const [character, setCharacter] = useState({});
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		// const { value } = e.target as HTMLTextAreaElement;
		setInputValue(e.target.value);
	};

	const baseUrl =
		'https://gateway.marvel.com:443/v1/public/characters?name=spider-man&limit=100&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(baseUrl);
			res.json().then(res => setCharacter(res));
		};

		fetchData();
	}, []);

	console.log(character);
	console.log(inputValue);

	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='one-full column'>
						<section className='spacing-top'>
							<Form>
								<div className='row'>
									<Input
										onChange={(e?: any) => handleChange(e)}
										value={inputValue}
										placeholder='Enter character'
									/>
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
	);
};

// App.contextType = AppContext;

export default App;
