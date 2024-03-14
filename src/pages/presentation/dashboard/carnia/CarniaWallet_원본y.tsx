import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { Calendar, dayjsLocalizer, View as TView, Views } from 'react-big-calendar';
import { useFormik } from 'formik';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../components/icon/Icon';
import eventList, { IEvents } from '../../../../common/data/events';
import USERS, { getUserDataWithUsername, IUserProps } from '../../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../../components/Avatar';
import useMinimizeAside from '../../../../hooks/useMinimizeAside';
import {
	getLabel,
	getUnitType,
	getViews,
} from '../../../../components/extras/calendarHelper';
import useDarkMode from '../../../../hooks/useDarkMode';
import { TColor } from '../../../../type/color-type';
// import CarniaWalletFuncs from './sub/CarniaWalletFuncs';
// import CarniaWalletCoins from './sub/CarniaWalletCoins';
// import CarniaWalletStaking from './sub/CarniaWalletStaking';
import Card, { CardActions, CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import CommonAsset from './common/CommonAsset';
import CommonNft from './common/CommonNft';

// import CarniaWalletSwap from './sub/CarniaWalletSwap';



const localizer = dayjsLocalizer(dayjs);
const now = new Date();

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
						<div className='col-auto'>
							<Avatar src={event?.user?.src} srcSet={event?.user?.srcSet} size={18} />
						</div>
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
			{event?.users && (
				<div className='col-auto'>
					<AvatarGroup size={18}>
						{event.users.map((user) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Avatar key={user.src} {...user} />
						))}
					</AvatarGroup>
				</div>
			)}
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
			{event?.user && (
				<div className='col-12'>
					<div className='row g-1 align-items-baseline'>
						<div className='col-auto'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Avatar {...event?.user} size={18} />
						</div>
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
			{event?.users && (
				<div className='col-12'>
					<AvatarGroup size={18}>
						{event.users.map((user) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<Avatar key={user.src} {...user} />
						))}
					</AvatarGroup>
				</div>
			)}
		</div>
	);
};

type TListTab = '자산' | 'NFT';

const CarniaWallet = () => {

	// BEGIN :: List Tab
	const LIST_TAB: { [key: string]: TListTab } = {
		ASSET: '자산',
		NFT: 'NFT',
	};
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.ASSET);
	const handleActiveListTab = (tabName: TListTab) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName: TListTab): 'primary' | 'light' => {
		if (activeListTab === tabName) return 'primary';
		return 'light';
	};
	
	const { darkModeStatus, themeStatus } = useDarkMode();
	useMinimizeAside();

	const [toggleRightPanel, setToggleRightPanel] = useState(true);

	// BEGIN :: Calendar
	// Active employee
	// const [employeeList, setEmployeeList] = useState({
	// 	[USERS.JOHN.username]: true,
	// 	[USERS.ELLA.username]: true,
	// 	[USERS.RYAN.username]: true,
	// 	[USERS.GRACE.username]: true,
	// });
	// // Events
	const [events, setEvents] = useState(eventList);

	// FOR DEV
	useEffect(() => {
		setEvents(eventList);
		return () => {};
	}, []);

	const initialEventItem: IEvent = {
		start: undefined,
		end: undefined,
		name: undefined,
		id: undefined,
		user: undefined,
	};
	// Selected Event
	const [eventItem, setEventItem] = useState<IEvent>(initialEventItem);
	// Calendar View Mode
	const [viewMode, setViewMode] = useState<TView>(Views.MONTH);
	// Calendar Date
	const [date, setDate] = useState(new Date());
	// Item edit panel status
	const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState<boolean>(false);
	const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
	const [eventAdding, setEventAdding] = useState<boolean>(false);

	// Calendar Unit Type
	const unitType = getUnitType(viewMode);
	// Calendar Date Label
	const calendarDateLabel = getLabel(date, viewMode);

	// Change view mode
	const handleViewMode = (e: dayjs.ConfigType) => {
		setDate(dayjs(e).toDate());
		setViewMode(Views.DAY);
	};
	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }: { start: any; end: any }) => {
		setEventAdding(true);
		setEventItem({ ...initialEventItem, start, end });
	};

	useEffect(() => {
		if (eventAdding) {
			setInfoEvent();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventAdding]);

	/**
	 * Calendar Item Container Style
	 * @param event
	 * @param start
	 * @param end
	 * @param isSelected
	 * @returns {{className: string}}
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// const eventStyleGetter = (
	// 	event: { color?: TColor },
	// 	start: any,
	// 	end: any,
	// 	isSelected: boolean,
	// ) => {
	// 	const isActiveEvent = start <= now && end >= now;
	// 	const isPastEvent = end < now;
	// 	const color = isActiveEvent ? 'success' : event.color;

	// 	return {
	// 		className: classNames({
	// 			[`bg-l${darkModeStatus ? 'o25' : '10'}-${color} text-${color}`]: color,
	// 			'border border-success': isActiveEvent,
	// 			'opacity-50': isPastEvent,
	// 		}),
	// 	};
	// };

	const formik = useFormik({
		initialValues: {
			eventName: '',
			eventStart: '',
			eventEnd: '',
			eventEmployee: '',
			eventAllDay: false,
		},
		onSubmit: (values) => {
			if (eventAdding) {
				setEvents((prevEvents) => [
					...prevEvents,
					{
						id: values.eventStart,
						...getServiceDataWithServiceName(values.eventName),
						end: values.eventEnd,
						start: values.eventStart,
						user: { ...getUserDataWithUsername(values.eventEmployee) },
					},
				]);
			}
			setToggleInfoEventCanvas(false);
			setEventAdding(false);
			setEventItem(initialEventItem);
			formik.setValues({
				eventName: '',
				eventStart: '',
				eventEnd: '',
				eventEmployee: '',
				eventAllDay: false,
			});
		},
	});

	useEffect(() => {
		if (eventItem)
			formik.setValues({
				...formik.values,
				// @ts-ignore
				eventId: eventItem.id || null,
				eventName: eventItem.name || '',
				eventStart: dayjs(eventItem.start).format(),
				eventEnd: dayjs(eventItem.end).format(),
				eventEmployee: eventItem?.user?.username || '',
			});
		return () => {};
		//	eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventItem]);
	// END:: Calendar

	return (
		<PageWrapper title={'CarniaWallet'}>
			<Page container='fluid'>
				<Card>
					<div className='d-flex justify-content-center'>
						<CardActions>
							<div 
								className='dflex-justify-content-center bg-white p-1 border border-primary border-1 rounded-3'>
								{Object.keys(LIST_TAB).map((key) => (
									<Button
										key={key}
										color={getStatusActiveListTabColor(LIST_TAB[key])}
										style={{width:120}}
										onClick={() => handleActiveListTab(LIST_TAB[key])}
										>
										{LIST_TAB[key]}
									</Button>
								))}
							</div>
						</CardActions>
				 </div>					
				 <CardBody className='table-responsive'>
						{activeListTab === LIST_TAB.ASSET && <CommonAsset />}
						{activeListTab === LIST_TAB.NFT && <CommonNft />}
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default CarniaWallet;
