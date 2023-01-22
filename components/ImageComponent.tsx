import React from 'react';
import { Image } from '@chakra-ui/react';

type Props = {
	src: string;
	alt: string;
};

const ImageComponent = (props: Props) => {
	return <Image src={props.src} alt={props.alt} width={{ base: '90vw' }} />;
};

export default ImageComponent;
