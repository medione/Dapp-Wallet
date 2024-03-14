import React, { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Content from '../Content/Content';
import WrapperOverlay from './WrapperOverlay';
import HeaderRoutes from '../Header/HeaderRoutes';
import FooterRoutes from '../Footer/FooterRoutes';
import ThemeContext from '../../contexts/themeContext';

interface IWrapperContainerProps {
	children: ReactNode;
	className?: string;
}
export const WrapperContainer: FC<IWrapperContainerProps> = ({ children, className, ...props }) => {
	const { rightPanel } = useContext(ThemeContext);

	// console.log(`src\layout\Wrapper\Wrapper.tsx > children`)
	// console.log(children)
	// console.log(`src\layout\Wrapper\Wrapper.tsx > children`)
	// console.log(className)
	// console.log(`src\layout\Wrapper\Wrapper.tsx > children`)
	// console.log({...props})
	// console.log(`src\layout\Wrapper\Wrapper.tsx > ThemeContext`)
	// console.log(ThemeContext)
	// console.log(`src\layout\Wrapper\Wrapper.tsx > rightPanel`)
	// console.log(rightPanel) // => false

	return (
		<div
			className={classNames(
				'wrapper',
				{ 'wrapper-right-panel-active': rightPanel },
				className,
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</div>
	);
};
WrapperContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
WrapperContainer.defaultProps = {
	className: undefined,
};

const Wrapper = () => {
	return (
		<>
			<WrapperContainer>
				<HeaderRoutes />
				<Content />
				<FooterRoutes />
			</WrapperContainer>
			<WrapperOverlay />
		</>
	);
};

export default Wrapper;
