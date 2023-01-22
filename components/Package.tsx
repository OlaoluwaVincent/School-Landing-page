import {
	Box,
	Button,
	Center,
	HStack,
	Image,
	VStack,
	Text,
	Stack,
} from '@chakra-ui/react';
import Download from '../public/svg/download-icon.svg';
import Clock from '../public/svg/clock-icon.svg';
import Lessons from '../public/svg/swim-icon.svg';
import Stats from '../public/svg/progress-icon.svg';
import CaretRight from '../public/svg/cavet-right-icon.svg';
import Like from '../public/svg/like-icon.svg';
import Cart from '../public/svg/cart-icon.svg';
import Seen from '../public/svg/seen-icon.svg';

type Props = {
	alt: string;
	src: string;
	numberOfCourses?: number;
	title: string;
	lessons?: number;
	hours?: number;
};

const Package = (props: Props) => {
	return (
		<HStack
			gap={{ base: '0px', lg: '10px' }}
			className='card--shadow card--bg'
			padding={{ base: '20px 10px', lg: '0px' }}
			borderRadius={'8px'}
		>
			<Box position={'relative'}>
				<Image
					src={props.src}
					alt={props.alt}
					h='400px'
					w={'200px'}
					minW={'200px'}
					objectFit={'cover'}
					objectPosition={'top center'}
					display={{ base: 'none', lg: 'block' }}
				/>
				<HStack
					position='absolute'
					bottom={4}
					w={'100%'}
					justify='center'
				>
					<Like />
					<Cart />
					<Seen />
				</HStack>
			</Box>

			<VStack
				alignItems={'flex-start'}
				w={{ base: '100%', md: '290px' }}
				// bg={'aliceblue'}
			>
				<Text className='h6' fontWeight={'bold'}>
					{props.numberOfCourses
						? props.numberOfCourses + ' Online Courses'
						: 'Lifetime Access'}
				</Text>
				<Text
					className='h3'
					fontWeight={700}
					fontSize={{ base: 'lg', lg: '3xl' }}
				>
					{props.title}
				</Text>
				<Text className='paragraph' fontSize={{ base: 'md', lg: 'lg' }}>
					We focus on ergonomics and meeting you where you work. It is
					only a keystroke away.
				</Text>
				<HStack align={'center'}>
					<Center className='icon'>
						<Download />
					</Center>
					<Text className='h6 disabled' fontWeight={700}>
						15 Sales
					</Text>
				</HStack>
				<Text className='h6 discount'>$16.48</Text>
				<HStack
					gap={2}
					flexWrap={{ base: 'wrap', lg: 'nowrap' }}
					justify={{ base: 'center', lg: 'flex-start' }}
				>
					<Stack
						direction={{ xl: 'row', lg: 'column' }}
						align={'center'}
					>
						<Center className='icon'>
							<Clock />
						</Center>
						<Text className='h6 disabled'>22hrs</Text>
					</Stack>
					<Stack
						direction={{ xl: 'row', lg: 'column' }}
						align={'center'}
					>
						<Center className='icon'>
							<Lessons />
						</Center>
						<Text className='h6 disabled'>Lessons</Text>
					</Stack>
					<Stack
						direction={{ xl: 'row', lg: 'column' }}
						align={'center'}
					>
						<Center className='icon'>
							<Stats />
						</Center>
						<Text className='h6 disabled'>Progress</Text>
					</Stack>
				</HStack>
				<Button
					className='btn btn--text btn--outline'
					rightIcon={<CaretRight />}
					variant={'outline'}
					borderRadius={'full'}
					alignSelf={{ base: 'center', lg: 'flex-start' }}
				>
					Learn More
				</Button>
			</VStack>
		</HStack>
	);
};

export default Package;
