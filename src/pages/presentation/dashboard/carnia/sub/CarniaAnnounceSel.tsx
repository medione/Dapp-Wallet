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
import announceData from './../data/dummyAnnounceData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import Nav, { NavItem } from '../../../../../components/bootstrap/Nav';
import { NavLink, useHref } from 'react-router-dom';
import Bitcoin from './image/bit.png'
import Icon from '../../../../../components/icon/Icon';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

interface IAnnounceDataItemProps {
	id: number;
	title: string;
	yymmddss: string;
}

const EventDataItem: FC<IAnnounceDataItemProps> = ({ id, title, yymmddss}) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<>
			<div className='col-12'>
				{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
				<div className='row'>
						<div className='col d-flex align-items-center'>
							<div className='d-flex flex-column justify-content-start'>
								<div 
										className={classNames('flex-grow-1 my-2', {
											'text-dark': !darkModeStatus,
											'text-white': darkModeStatus,
										})}
								>
									<Link 
											target='_blank'
											to={
												id === 1 
												? `${import.meta.env.VITE_BOARD1_URL}`
												: `${import.meta.env.VITE_BOARD2_URL}` 
											}
											className='text-decoration-none'
									>
										<div 
											className={classNames('h5', {
												'text-dark': !darkModeStatus,
												'text-white': darkModeStatus,
											})}								
										>
											공지
										</div>
									</Link>									
									<Link 
											target='_blank'
											to={
												id === 1 
												? `${import.meta.env.VITE_BOARD1_URL}`
												: `${import.meta.env.VITE_BOARD2_URL}` 
											}
											className='text-decoration-none'
									>
										<div
												className={classNames('', {
													'text-dark': !darkModeStatus,
													'text-white': darkModeStatus,
												})}
										>
											{title}
										</div>
									</Link>
									<Link
											target='_blank'
											to={
												id === 1 
												? `${import.meta.env.VITE_BOARD1_URL}`
												: `${import.meta.env.VITE_BOARD2_URL}` 
											}						
											className='text-muted text-decoration-none'
										>
										<div className='fs-6'>{yymmddss}</div>
									</Link>
								</div>
							</div>
						</div>
					<hr/>
				</div>
			</div>
		</>
	);
};

const CarniaAnnounceSel = () => {
	return (
		<>
		<PageWrapper title='CarniaAnnounceSel'>
			<Card style={{height:500}}>
				<CardBody isScrollable>
					<div className='row g-3'>
						{announceData.map((i) => (
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

export default CarniaAnnounceSel;