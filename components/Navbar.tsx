import React from 'react';
import {
	ButtonGroup,
	HStack,
	UnorderedList,
	ListItem,
	Image,
} from '@chakra-ui/react';
// import Image from 'next/image';
import RightIcon from '../public/svg/right-arrow-icon.svg';
import { ButtonComponent } from './index';
//
type Props = {};

const Navbar = (props: Props) => {
	return (
		<HStack
			align={'center'}
			justify={'space-between'}
			direction={'row'}
			className='content--bg'
			id='content'
		>
			<Image
				src={'/svg/brand.svg'}
				alt='Logo'
				className='navbar--logo'
				height={{ base: '40px', sm: '50px', lg: '71px' }}
				width={{ base: '80px', sm: '100px', lg: '172px' }}
			/>
			<UnorderedList
				styleType={'none'}
				display={{ base: 'none', md: 'flex' }}
				gap={'20px'}
			>
				<ListItem className='btn--text link'>Home</ListItem>
				<ListItem className='btn--text link'>Product</ListItem>
				<ListItem className='btn--text link'>Pricing</ListItem>
				<ListItem className='btn--text link'>Contact</ListItem>
			</UnorderedList>
			<ButtonGroup gap={{ base: '0px', sm: '20px', xl: '122px' }}>
				<ButtonComponent
					variant='link'
					value='Login'
					className='btn btn--link btn--text'
				/>
				<ButtonComponent
					variant='solid'
					icon={<RightIcon />}
					value='Join Us'
					className='btn btn--solid btn--text'
				/>
			</ButtonGroup>
		</HStack>
	);
};

export default Navbar;
