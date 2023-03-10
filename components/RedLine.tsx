import React from 'react';

type Props = {
	length: 'full' | 'half';
};

const RedLine = (props: Props) => {
	return (
		<div
			style={
				props.length === 'full'
					? { width: '100px', height: '10px' }
					: { width: '50px', height: '5px' }
			}
			className='bg--danger'
		/>
	);
};

export default RedLine;
