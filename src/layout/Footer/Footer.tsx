import React, { FC, ReactNode } from 'react';
import { useMeasure } from 'react-use';

interface IFooterProps {
	children: ReactNode;
}
const Footer: FC<IFooterProps> = ({ children }) => {
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	return (
		<footer ref={ref} className='footer mb-1'>
			{children}
		</footer>
	);
};

export default Footer;
