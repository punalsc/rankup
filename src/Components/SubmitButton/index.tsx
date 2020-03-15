import React from 'react';

interface SubmitButtonProps {
	type: string;
	placeholder: string;
	className: string;
	value: string;
}

export default ({ type, className, value }: SubmitButtonProps) => (
	<>
		<input className={className} type={type} value={value} />
	</>
);
