import React from 'react';

type InputProps = {
	type: string;
	placeholder: string;
};

export default ({ type, placeholder }: InputProps) => {
	return (
		<div className='row'>
			<div className='two columns'>
				<label htmlFor='exampleEmailInput'>Add email</label>
			</div>
			<div className='ten columns '>
				<input
					className='u-full-width'
					type={type}
					placeholder={placeholder}
					id='exampleEmailInput'
				/>
			</div>
		</div>
	);
};
