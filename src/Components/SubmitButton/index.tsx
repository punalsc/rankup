import React from 'react';

interface SubmitButtonProps {
	placeholder: string;
	className: string;
	value: string;
	onClick: () => any;
}

export default ({ className, value, onClick }: SubmitButtonProps) => (
	<>
		<button className={className} onClick={onClick} type='submit'>
			{value}
		</button>
	</>
);
