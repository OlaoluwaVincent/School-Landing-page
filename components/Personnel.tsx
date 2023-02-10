import { Box, Image } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Personnel = (props: Props) => {
	return (
		<Box bg={'red.100'}>
			<Image
				src='/png/user-cover-1.png'
				alt='user-cover-1'
				width={'100%'}
				height={'230px'}
				objectFit={'cover'}
				objectPosition={'top bottom'}
			/>
			<Box>
				
			</Box>
		</Box>
	);
};

export default Personnel;
