import React from 'react';
import { Text, Center, VStack } from '@chakra-ui/react';
import RedLine from './RedLine';

type Props = {
	icon: any;
	contentText: string;
	heading: string;
};

const Card = (props: Props) => {
	return (
		<VStack
			className='card--shadow'
			height={{ base: 'max-content', md: '300px' }}
			w={{ base: '100%', md: '300px' }}
			gap={'10px'}
			padding={{ base: '10px', md: '30px' }}
		>
			<Center className='svg'>{props.icon}</Center>
			<Text className='h5 fw--bold' textAlign={'center'}>
				{props.heading}
			</Text>
			<RedLine length='half' />
			<Text
				className='paragraph'
				textAlign={{ base: 'center', lg: 'left' }}
			>
				{props.contentText}
			</Text>
		</VStack>
	);
};

export default Card;
