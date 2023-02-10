import {
	ButtonComponent,
	Layout,
	RedLine,
	Card,
	ImageComponent,
	Package,
	Testimonial,
	Subscribe,
	Personnel,
} from '@/components';
import {
	Stack,
	Box,
	Text,
	ButtonGroup,
	Button,
	VStack,
	HStack,
	Center,
} from '@chakra-ui/react';
import Board from '../public/svg/expert-teacher.svg';
import Instruction from '../public/svg/expert-instruction.svg';
import Caret from '../public/svg/cavet-right-icon.svg';

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
					<Text className='h6 fw--bold primary' mb={2}>
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
					<ImageComponent
						src='/svg/hero-cover.svg'
						alt='hero image'
					/>
				</Box>
			</Stack>
			{/* End of hero section */}

			<Stack
				display={'flex'}
				direction={{ base: 'column', xl: 'row' }}
				align={'center'}
				justify={{ base: 'flex-start', lg: 'space-around' }}
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
					w={{ base: '100%', md: '80%', xl: '100%' }}
					justifyContent={{
						base: 'flex-start',
						md: 'center',
						xl: 'flex-start',
					}}
				>
					<RedLine length='full' />
					<Text className='h2'>Affordable Packages</Text>
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
					<ImageComponent
						src='/svg/live-video.svg'
						alt='hero image'
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
					<Text className='h2' my={2}>
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
			{/* End of section 3 */}

			<Stack
				id='content'
				minH={'80vh'}
				gap={'20px'}
				mt={'20px'}
				justify={'center'}
			>
				<Box w='inherit'>
					<Text className='h6 fw--bold primary' mb={3}>
						Practise Advice
					</Text>
					<Text className='h2'>Affordable Packages</Text>
					<Text
						className='paragraph'
						w={{ base: '100%', md: '70%', lg: '490px' }}
					>
						Problems trying to resolve the conflict between the two
						major realms of Classical physics: Newtonian mechanics
					</Text>
				</Box>
				<Stack
					className='wrap'
					justify={{ md: 'center', lg: 'flex-start' }}
				>
					<Package
						title='Watch our Courses'
						alt='image'
						numberOfCourses={2000}
						src='/png/download.jpg'
					/>
					<Package
						title='Our Expert Teachers'
						alt='image two'
						src='/png/download2.jpg'
					/>
					<Package
						title='Our Expert Teachers'
						alt='image two'
						src='/png/school-mobile-view.png'
					/>
				</Stack>
			</Stack>
			{/* End of Section 4 */}

			<Stack
				id='content'
				minH={'90vh'}
				gap={'20px'}
				mt={'20px'}
				justify={'center'}
			>
				<Box mb={5}>
					<Text className='h6 fw--bold primary' mb={3}>
						Testimonials
					</Text>
					<Text className='h2'>Watch our Courses</Text>
					<Text
						className='paragraph'
						w={{ base: '100%', md: '70%', lg: '490px' }}
					>
						Problems trying to resolve the conflict between the two
						major realms of Classical physics: Newtonian mechanics
					</Text>
				</Box>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					justify={'center'}
					gap={{ base: '20px' }}
				>
					<Testimonial
						rate={3}
						role='Designer'
						name='Beatrice'
						src='/png/testimonial-user-1.png'
						alt='user1'
					/>
					<Testimonial
						rate={4}
						role='Instructor'
						name='Dean Shaw'
						src='/png/testimonial-user-2.png'
						alt='user 2'
					/>
				</Stack>
			</Stack>
			{/* End of Section 6 */}

			<Stack
				id='content'
				className='content--bg'
				minH={'90vh'}
				gap={'20px'}
				mt={'20px'}
				justify={'center'}
			>
				<VStack w={{ base: '100%', md: '60%' }} m='0 auto'>
					<Text className='h6 fw--bold primary'>Newsletter</Text>
					<Text className='h2'>Subscribe to our Newsletter</Text>
					<Text className='paragraph' textAlign={'center'}>
						For more information and update on our packages, courses
						and discount packages
					</Text>
				</VStack>
				<Subscribe />
			</Stack>
			{/* End of section 7 */}
			<Stack
				id='content'
				minH={'90vh'}
				gap={'20px'}
				mt={'20px'}
				justify={'center'}
			>
				<Box>
					<Text className='h6 fw--bold primary'>Team</Text>
					<Text className='h2'>Get Quality Education</Text>
					<Text
						className='paragraph'
						w={{ base: '100%', md: '70%', lg: '490px' }}
					>
						Problems trying to resolve the conflict between the two
						major realms of Classical physics: Newtonian mechanics
					</Text>
				</Box>
				<Stack direction={{ base: 'column', lg: 'row' }}>
					<Personnel />
				</Stack>
			</Stack>
		</Layout>
	);
}
