import React from 'react';
/// import AppContext from '../../Context/AppContext';
import './input.scss';

interface InputProps {
	placeholder?: string;
}

export default ({ placeholder }: InputProps) => {
	return (
		<>
			<div className='two columns'>
				<label htmlFor='exampleEmailInput'>Add email</label>
			</div>
			<div className='ten columns full-width'>
				<input className='u-full-width' type='text' placeholder={placeholder} />
			</div>
		</>
	);
};
