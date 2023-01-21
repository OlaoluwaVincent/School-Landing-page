import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Navbar } from './index';
import { Box, Stack } from '@chakra-ui/react';
type Props = {
	children: ReactNode;
	title?: string;
};

const Layout = ({ title, children }: Props) => {
	return (
		<Stack>
			<Head>
				<title>{title}</title>
			</Head>
			<Box>
				<Navbar />
				{children}
			</Box>
		</Stack>
	);
};

export default Layout;
