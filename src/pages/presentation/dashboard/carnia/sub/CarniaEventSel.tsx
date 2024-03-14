import React, { FC } from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import eventData from '../data/dummyEventData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import Nav, { NavItem } from '../../../../../components/bootstrap/Nav';
import { NavLink, useHref } from 'react-router-dom';
import Bitcoin from './image/bit.png'
import Icon from '../../../../../components/icon/Icon';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

interface IEventDataItemProps {
	id: number;
	image: string;
	name: string;
	type1: string;
	type2: string;	
}
const EventDataItem: FC<IEventDataItemProps> = ({ id, image, name, type1, type2 }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<>
		<div className='col-12'>
			{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
			<div className='row'>
				<div className='d-flex flex-column align-items-center'>
					<div className='flex-shrink-0 me-3'>
						<Link 
								to={
									id === 1 
									? `${import.meta.env.VITE_BOARD1_URL}`
									: `${import.meta.env.VITE_BOARD2_URL}` 
								}
								target='_blank'
						>
							<img src={image} style={{width: 450}} alt='이미지' />
						</Link>
						{/* <Button
							color='primary'
							isLight
							tag='a'
							// to='/wallet'
							size='lg'
							to= {
								id === 1 
								? `${import.meta.env.VITE_BOARD1_URL}`
								: `${import.meta.env.VITE_BOARD2_URL}` 
							}							
							>
							<img src={image} style={{width: 450}} alt='이미지' />								
						</Button> */}
					</div>
					<div className='flex-grow-1 my-2'>
						{/* <Link to={`/subTopCoin/${id}`}> */}
						<Link to={
								id === 1 
								? `${import.meta.env.VITE_BOARD1_URL}`
								: `${import.meta.env.VITE_BOARD2_URL}` 
							}
								className='text-decoration-none'
						>
							<div className='h3 text-primary tw-italic'>{name}</div>
						</Link>
						{/* href={`${import.meta.env.VITE_COINDESKKOREA_URL}`} */}
						<Link to={
								id === 1 
								? `${import.meta.env.VITE_BOARD1_URL}`
								: `${import.meta.env.VITE_BOARD2_URL}` 
							}
							className='text-muted text-decoration-none'
							>
							<div className='fs-6 text-primary'>{type1}</div>
						</Link>
					</div>
				</div>
				<hr/>
			</div>
		</div>
		</>
	);
};

const CarniaEventSel = () => {
	return (
		<>
		<PageWrapper title='CarniaEventSel'>
			<Card style={{height:500}}>
				<CardBody isScrollable>
					<div className='row g-3'>
						{eventData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<EventDataItem key={i.id} {...i} />
						))}
					</div>
				</CardBody>
			</Card>
		</PageWrapper>
	</>
	);
};

export default CarniaEventSel;