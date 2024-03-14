import React, { forwardRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IPageProps {
	children: ReactNode;
	container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
	className?: string;
}
const Page = forwardRef<HTMLDivElement, IPageProps>(
	({ children, className, container, ...props }, ref) => {

		// console.log("Page.tsx > children")
		// console.log(children)
		// console.log("Page.tsx > className")
		// console.log(className)
		// console.log("Page.tsx > container")
		// console.log(container)
		// console.log("Page.tsx > ...props")
		// console.log({...props})		
		// console.log("Page.tsx > ref")
		// console.log(ref)		

		return (
			<div
				ref={ref}
				className={classNames('page', className, {
					[`container${typeof container === 'string' ? `-${container}` : ''}`]: container,
				})}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</div>
		);
	},
);
Page.displayName = 'Page';
Page.propTypes = {
	children: PropTypes.node.isRequired,
	// @ts-ignore
	container: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf([null, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid']),
	]),
	className: PropTypes.string,
};
Page.defaultProps = {
	container: 'xxl',
	className: undefined,
};

export default Page;
