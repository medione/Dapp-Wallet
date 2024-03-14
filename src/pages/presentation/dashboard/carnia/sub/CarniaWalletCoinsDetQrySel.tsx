import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import classNames from 'classnames';
import { Calendar, dayjsLocalizer, View as TView, Views } from 'react-big-calendar';
import { useFormik } from 'formik';
import { Calendar as DatePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';

import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../../../layout/SubHeader/SubHeader';

import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../../components/icon/Icon';
import Button from '../../../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import CommonUpcomingEvents from '../../../../_common/CommonUpcomingEvents';
import eventList, { IEvents } from '../../../../../common/data/events';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../../components/bootstrap/forms/Input';
import Checks from '../../../../../components/bootstrap/forms/Checks';
import Select from '../../../../../components/bootstrap/forms/Select';
import USERS, { getUserDataWithUsername, IUserProps } from '../../../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../../../components/Avatar';
import useMinimizeAside from '../../../../../hooks/useMinimizeAside';
import Popovers from '../../../../../components/bootstrap/Popovers';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	getLabel,
	getUnitType,
	getViews,
} from '../../../../../components/extras/calendarHelper';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { TColor } from '../../../../../type/color-type';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../../../components/bootstrap/Dropdown';




dayjs.locale('ko');
const localizer = dayjsLocalizer(dayjs);
const now = new Date();

interface IEvent extends IEvents {
	user?: IUserProps;
	users?: IUserProps[];
	color?: TColor;
}

const CarniaWalletCoinsDetQrySel = () => {
	const { darkModeStatus, themeStatus } = useDarkMode();
	useMinimizeAside();

	const [toggleRightPanel, setToggleRightPanel] = useState(true);
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
		// setViewMode(Views.DAY);
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

	const [toggleCalendar, setToggleCalendar] = useState(true);

	return (
		<PageWrapper title='CarniaWalletCoinsDetQrySel'>
			<SubHeader>
				<SubHeaderRight>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button color={darkModeStatus ? 'light' : 'dark'} isLight>
								{calendarDateLabel}
							</Button>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DatePicker
							  locale={ko}
								onChange={(item) => setDate(item)}
								// date={date}
								dateDisplayFormat='YYYY-MM-DD'
								color={import.meta.env.VITE_PRIMARY_COLOR}
							/>
						</DropdownMenu>
					</Dropdown>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>

			</Page>
		</PageWrapper>
	);
};

export default CarniaWalletCoinsDetQrySel;
