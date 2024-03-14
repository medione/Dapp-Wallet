import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer, View as TView, Views } from 'react-big-calendar';
import classNames from 'classnames';
import { useFormik } from 'formik';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../../components/icon/Icon';
import eventList, { IEvents } from '../../../../../common/data/events';
import USERS, { getUserDataWithUsername, IUserProps } from '../../../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../../../components/Avatar';
import useMinimizeAside from '../../../../../hooks/useMinimizeAside';
import {
	getLabel,
	getUnitType,
	getViews,
} from '../../../../../components/extras/calendarHelper';
import SERVICES, { getServiceDataWithServiceName } from '../../../../../common/data/serviceDummyData';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { TColor } from '../../../../../type/color-type';
import CarniaCoinRaiseDetChartModal from './CarniaCoinRaiseDetChartModal';
import CarniaCoinRaiseDetBoard from './CarniaCoinRaiseDetBoard';
import CarniaWalletStaking from './CarniaWalletStaking';

import Button from '../../../../../components/bootstrap/Button';


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

const CarniaCoinSwapRaiseDet = () => {
	const { darkModeStatus, themeStatus } = useDarkMode();
	useMinimizeAside();

	const [toggleRightPanel, setToggleRightPanel] = useState(true);

	// BEGIN :: Calendar
	// Active employee
	const [employeeList, setEmployeeList] = useState({
		[USERS.JOHN.username]: true,
		[USERS.ELLA.username]: true,
		[USERS.RYAN.username]: true,
		[USERS.GRACE.username]: true,
	});
	// Events
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
	const eventStyleGetter = (
		event: { color?: TColor },
		start: any,
		end: any,
		isSelected: boolean,
	) => {
		const isActiveEvent = start <= now && end >= now;
		const isPastEvent = end < now;
		const color = isActiveEvent ? 'success' : event.color;

		return {
			className: classNames({
				[`bg-l${darkModeStatus ? 'o25' : '10'}-${color} text-${color}`]: color,
				'border border-success': isActiveEvent,
				'opacity-50': isPastEvent,
			}),
		};
	};

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

	const [toggleCalendar, setToggleCalendar] = useState(true);

	return (
		// <PageWrapper title={demoPagesMenu.appointment.subMenu.dashboard.text}>
		<PageWrapper title={'CarniaCoinSwapRaiseDet'}>		
			{/* <Page container='fluid'> */}
			<Page container='fluid'>
				<div className='row'>				
					{/* <div className='col-xxl-12 col-xl-12 col-lg-12 col-sm-12'> */}
					<div className='col-12'>
								<CarniaCoinRaiseDetChartModal />
					</div>
					{/* <div className='col-xxl-12 col-xl-12 col-lg-12 col-sm-12 mt-3'> */}
					<div className='col-12 mt-3'>
								<CarniaCoinRaiseDetBoard />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CarniaCoinSwapRaiseDet;
