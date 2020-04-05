import React, { ReactNode } from 'react';

type FormProps = {
    children: ReactNode;
    onSubmit: () => any;
};

export default ({ children, onSubmit }: FormProps) => {
	return <form onSubmit={onSubmit}>{children}</form>;
};
