import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import Form from './Components/Form';
import Input from './Components/Input';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import SubmitButton from './Components/SubmitButton';

const App = () => {
	const isInitialMount = useRef(true);

	const [character, setCharacter] = useState([]);
	const [loading, setLoading] = useState(false);
	const [historyList, setHistoryList] = useState([] as any);
	const [inputValue, setInputValue] = useState('');
	const [isError, setIsError] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setInputValue('');
	};

	const handleClick = () => setHistoryList([...historyList, ...character]);

	const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${inputValue}&limit=100&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`.replace(
		' ',
		'%20'
	);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await fetch(baseUrl);
			res
				.json()
				.then((res) => {
					setCharacter(res.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err.message) {
						setIsError(true);
					}
				});
		};
		isInitialMount.current ? (isInitialMount.current = false) : fetchData();
	}, [inputValue, baseUrl, historyList]);

	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='one-full column'>
						<section className='spacing-top'>
							<div className='row'>
								<Form onSubmit={(e?: any) => handleSubmit(e)}>
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
											onClick={handleClick}
										/>
									</div>
								</Form>
							</div>
							{isError && (
								<div className='row'>
									<p>Something went wrong ...</p>
								</div>
							)}
							<div className='row'></div>
						</section>
						<section>
							<div className='row'>
								{loading ? (
									<p>Loading...</p>
								) : (
									character && (
										<div className='one-half column category'>
											{historyList.map((item: any) => (
												<div key={item.id}>
													<img
														className='u-max-full-width'
														src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
														alt={item.name + 'alt'}
													/>
												</div>
											))}
										</div>
									)
								)}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
