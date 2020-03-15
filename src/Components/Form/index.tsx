import React, { ReactNode } from 'react';

// import AppContext from '../../Context/AppContext';

type FormProps = {
	children: ReactNode;
};

export default ({ children }: FormProps) => {
	return <form>{children}</form>;
};
