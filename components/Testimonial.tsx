import { VStack, Center, HStack, Text } from '@chakra-ui/react';
import ImageComponent from './ImageComponent';
import FilledStar from '../public/svg/star-icon.svg';
import EmptyStar from '../public/svg/unlike-icon.svg';

type Props = {
	alt: string;
	src: string;
	/**Number cannot be more than 5 */
	rate: number;
	role: string;
	name: string;
};

const Testimonial = (props: Props) => {
	const filledStars = Array(props.rate).fill(<FilledStar />);
	const emptyStar = Array(5 - props.rate).fill(<EmptyStar />);
	const arr = [...filledStars, ...emptyStar];

	return (
		<VStack>
			<Center rounded={'full'} h='128px' w='128px' overflow={'hidden'}>
				<ImageComponent src={props.src} alt={props.alt} />
			</Center>

			<VStack gap={0}>
				<Text
					className='paragraph'
					w={{ xl: '70%' }}
					textAlign={'center'}
				>
					Slate helps you see how many more days you need to work to
					reach your financial goal for the month and year.
				</Text>
				<Text className='h5 fw--bold' textAlign={'center'}>
					{props.name}
					<Text className='small fw--mid'>{props.role}</Text>
				</Text>
			</VStack>

			<HStack pt={'10px'}>
				{arr.map((Rate, i: any) => (
					<div key={i}>{Rate}</div>
				))}
			</HStack>
		</VStack>
	);
};

export default Testimonial;
