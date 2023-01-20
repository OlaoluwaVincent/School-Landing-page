import Head from 'next/head';
import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	title?: string;
};

const Layout = ({ title, children }: Props) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
			</Head>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
