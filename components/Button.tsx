import React from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
	icon?: any;
	value: string;
	variant: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
	className?: string;
	btnSize?: 'xs' | 'sm' | 'md' | 'lg';
};

const ButtonComponent = (props: Props) => {
	return (
		<Button
			rightIcon={props.icon}
			variant={props.variant}
			size={props.btnSize || { base: 'sm', lg: 'md' }}
			className={props.className}
		>
			{props.value}
		</Button>
	);
};

export default ButtonComponent;
