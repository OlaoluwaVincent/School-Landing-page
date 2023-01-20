import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/components';

export default function Home() {
	return (
		<Layout title='Homepage'>
			<main>
				<Image
					src={'/svg/brand.svg'}
					alt='Logo'
					width={172}
					height={81}
				/>
			</main>
		</Layout>
	);
}
