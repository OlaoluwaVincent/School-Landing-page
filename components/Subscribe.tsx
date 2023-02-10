import { Button, Box } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {};

const Subscribe = (props: Props) => {
	const [text, setText] = useState<string>();
	return (
		<Box className='newsletter'>
			<input
				type='email'
				value={text}
				onChange={(e) => setText(e.target.value)}
				className='newsletter--input paragraph '
				placeholder='email@email.com'
			/>
			<Button
				borderRadius={'0 3px 3px 0'}
				className='btn btn--solid btn--text'
			>
				Subscribe
			</Button>
		</Box>
	);
};

export default Subscribe;
