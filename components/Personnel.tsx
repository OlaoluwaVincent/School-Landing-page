import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FBLogo from '../public/svg/facebook-logo.svg';
import TwitterLogo from '../public/svg/twitter-logo.svg';
import InstaLogo from '../public/svg/instagram-logo.svg';

type Props = {
	name: string;
	profession: string;
	src: string;
};

const Personnel = ({ name, profession, src }: Props) => {
	return (
		<VStack
			className='card--shadow'
			paddingBottom={6}
			borderRadius={'lg'}
			overflowY={'hidden'}
		>
			<Image
				src={src}
				alt='user-cover-1'
				width={'100%'}
				height={'230px'}
				objectFit={'cover'}
				objectPosition={'top bottom'}
			/>
			<Box>
				<Text className='h4 fw--mid'>{name}</Text>
				<Text className='h5 fw--light'>{profession}</Text>
			</Box>
			<HStack gap={5}>
				<FBLogo />
				<InstaLogo />
				<TwitterLogo />
			</HStack>
		</VStack>
	);
};

export default Personnel;
