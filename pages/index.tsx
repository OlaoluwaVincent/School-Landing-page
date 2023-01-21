import { ButtonComponent, Layout, RedLine, Card } from '@/components';
import { Stack, Box, Text, ButtonGroup, Image, Button } from '@chakra-ui/react';
import Board from '../public/svg/expert-teacher.svg';
import Instruction from '../public/svg/expert-instruction.svg';
import Caret from '../public/svg/cavet-right-icon.svg';
import LiveCall from '../public/svg/live-video.svg';

export default function Home() {
	return (
		<Layout title='Homepage'>
			<Stack
				display={'flex'}
				direction={{ base: 'column-reverse', md: 'row' }}
				align={'center'}
				justify={'flex-start'}
				className='content--bg'
				id='content'
				h={'max-content'}
			>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
					pt={5}
					w={'100%'}
				>
					<Text className='h6 h5' mb={2}>
						Welcome
					</Text>
					<Text className='h1'>Best Learning Opportunities</Text>
					<Text noOfLines={2} className='paragraph'>
						Our goal is to make online education work for everyone
					</Text>
					<ButtonGroup mt={5} mb={'40px'}>
						<ButtonComponent
							variant='solid'
							value='Join Us'
							className='btn btn--solid btn--text'
						/>
						<ButtonComponent
							variant='outline'
							value='Learn More'
							className='btn btn--outline btn--text'
						/>
					</ButtonGroup>
				</Box>
				<Box>
					<Image
						src='/svg/hero-cover.svg'
						alt='hero image'
						width={{ base: '90vw' }}
					/>
				</Box>
			</Stack>
			{/* End of hero section */}

			<Stack
				display={'flex'}
				direction={{ base: 'column', xl: 'row' }}
				align={'center'}
				justify={{ base: 'flex-start', lg: 'space-between' }}
				id='content'
				minH={'80vh'}
				gap={'20px'}
				mt={'20px'}
			>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={{ base: '10px', md: '16px', lg: '35px' }}
					pb={'20px'}
					w={{ base: '100%', md: '60%', xl: '100%' }}
					justifyContent={{
						base: 'flex-start',
						md: 'center',
						xl: 'flex-start',
					}}
				>
					<RedLine length='full' />
					<Text className='h2 h1'>Affordable Packages</Text>
					<Text className='paragraph'>
						Problems trying to resolve the conflict between the two
						major realms of Classical physics: Newtonian mechanics
					</Text>
					<Button
						className='btn btn--link btn--text'
						alignSelf={'self-start'}
						p={0}
						rightIcon={<Caret />}
					>
						Learn More
					</Button>
				</Box>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					justify={'center'}
					textAlign={{ base: 'center', md: 'left' }}
					width={'100%'}
				>
					<Card
						icon={<Board />}
						contentText='The gradual accumulation of information about'
						heading='Certified Teacher'
					/>
					<Card
						icon={<Instruction />}
						contentText='The gradual accumulation of information about'
						heading='Expert Instruction'
					/>
				</Stack>
			</Stack>
			{/* End of section 2 */}
			<Stack
				display={'flex'}
				direction={{ base: 'column', md: 'row' }}
				align={'center'}
				justify={{ base: 'flex-start', md: 'space-between' }}
				id='content'
				minH={'80vh'}
				gap={'20px'}
				mt={'20px'}
			>
				<Box>
					<Image
						src='/svg/live-video.svg'
						alt='hero image'
						width={{ base: '90vw' }}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'flex-start'}
					pt={5}
					w={'100%'}
					gap={{ base: '10px', md: '16px', lg: '20px' }}
				>
					<RedLine length='full' />
					<Text className='h1 h2' my={2}>
						Video in Live Action
					</Text>
					<Text className='paragraph' pr={{ xl: '40px' }}>
						Problems trying to resolve the conflict between the two
						major realms of Classical physics: Newtonian mechanics
					</Text>
					<Button
						className='btn btn--link btn--text'
						alignSelf={'self-start'}
						p={0}
						rightIcon={<Caret />}
					>
						Learn More
					</Button>
				</Box>
			</Stack>
		</Layout>
	);
}
