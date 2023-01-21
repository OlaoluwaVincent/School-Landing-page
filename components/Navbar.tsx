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
import { NAVBAR__ITEMS } from '@/utils/datas';

//
type Props = {};

const Navbar = (props: Props) => {
	return (
		<HStack
			align={'center'}
			// justify={'space-between'}
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
				{NAVBAR__ITEMS.map((item, id) => (
					<ListItem key={`${item}-${id}`} className='btn--text link'>
						{item}
					</ListItem>
				))}
			</UnorderedList>
			<ButtonGroup gap={{ base: '20px', sm: '40px', lg: '122px' }}>
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
