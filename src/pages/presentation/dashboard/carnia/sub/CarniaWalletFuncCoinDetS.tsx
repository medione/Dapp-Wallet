import React, { useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import CommonFriend from '../common/CommonFriend';
import CommonAddr from '../common/CommonAddr';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import useDarkMode from '../../../../../hooks/useDarkMode';
import eventList, { IEvents } from '../../../../../common/data/events';
import Icon from '../../../../../components/icon/Icon';
import USERS, { getUserDataWithUsername, IUserProps } from '../../../../../common/data/userDummyData';
import { TColor } from '../../../../../type/color-type';
import classNames from 'classnames';

interface IEvent extends IEvents {
	user?: IUserProps;
	users?: IUserProps[];
	color?: TColor;
}

const MyEvent = (data: { event: IEvent }) => {
	const { darkModeStatus } = useDarkMode();

	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col text-truncate'>
				{event?.icon && <Icon icon={event?.icon} size='lg' className='me-2' />}
				{event?.name}
			</div>
			{event?.user?.src && (
				<div className='col-auto'>
					<div className='row g-1 align-items-baseline'>
						<small
							className={classNames('col-auto text-truncate', {
								'text-dark': !darkModeStatus,
								'text-white': darkModeStatus,
							})}>
							{event?.user?.name}
						</small>
					</div>
				</div>
			)}
			{/* {event?.users && (
				<div className='col-auto'>
					<AvatarGroup size={18}>
						{event.users.map((user) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Avatar key={user.src} {...user} />
						))}
					</AvatarGroup>
				</div>
			)} */}
		</div>
	);
};
const MyWeekEvent = (data: { event: IEvent }) => {
	const { darkModeStatus } = useDarkMode();

	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col-12 text-truncate'>
				{event?.icon && <Icon icon={event?.icon} size='lg' className='me-2' />}
				{event?.name}
			</div>
		</div>
	);
};


type TListTab = '친구' | '주소';
const CommonDashboardBookingLists = () => {
	// BEGIN :: List Tab
	const LIST_TAB: { [key: string]: TListTab } = {
		FRIEND: '친구',
		ADDR: '주소',
	};
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.FRIEND);
	const handleActiveListTab = (tabName: TListTab) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName: TListTab): 'primary' | 'light' => {
		if (activeListTab === tabName) return 'primary';
		return 'light';
	};
	// END :: List Tab

	return (
		<PageWrapper title='CarniaWalletFuncCoinDetS'>
			<Card>
				<CardActions className='h2'>


					{/* <Button
						// color='primary'
						icon='ArrowBackIosNew'
						size={'lg'}
						isLink
						tag='a'
						// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
						to="/wallet"
					/>		
					<div className='d-flex justify-content-center'>
						Bitcoin 전송
					</div> */}
					<div className='d-flex justify-content-between align-items-center my-3'>
						<div className='col-4'>
							<Button
								// color='primary'
								isLink
								icon='ArrowBackIosNew'
								size='lg'
								// icon='Summarize'
								tag='a'
								// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
								to="/wallet"
								/>		
						</div>
						<div className='col-4 d-flex justify-content-center h3'>
							Bitcoin 전송
						</div>
						<div className='col-4 d-flex justify-content-end'>
							<div className='me-4'>
								{/* 코인 정보 */}
							</div>
						</div>
					</div>

				</CardActions>
				<CardHeader
					className='ms-4'
				>
					<CardActions>
						<div className='bg-light p-2 rounded-3'>
							{Object.keys(LIST_TAB).map((key) => (
								<Button
									key={key}
									color={getStatusActiveListTabColor(LIST_TAB[key])}
									onClick={() => handleActiveListTab(LIST_TAB[key])}>
									{LIST_TAB[key]}
								</Button>
							))}
						</div>
					</CardActions>
				</CardHeader>
				<CardBody className='table-responsive'>
					{activeListTab === LIST_TAB.FRIEND && <CommonFriend />}
					{activeListTab === LIST_TAB.ADDR && <CommonAddr />}
				</CardBody>
			</Card>
		</PageWrapper>
	);
};

export default CommonDashboardBookingLists;
