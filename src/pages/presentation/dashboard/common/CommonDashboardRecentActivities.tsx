import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import ko from 'date-fns/locale/ko';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Timeline, { TimelineItem } from '../../../../components/extras/Timeline';
import Popovers from '../../../../components/bootstrap/Popovers';
import Icon from '../../../../components/icon/Icon';

dayjs.locale('ko');

const CommonDashboardRecentActivities = () => {

	return (
		<Card stretch>
			<CardHeader>
				<CardLabel icon='NotificationsActive' iconColor='warning'>
					<CardTitle tag='div' className='h5'>
						최근 활동
					</CardTitle>
					<CardSubTitle tag='div' className='h6'>
						{/* last 2 weeks */}
						지난 2 주간
					</CardSubTitle>
				</CardLabel>
			</CardHeader>
			<CardBody isScrollable>
				<Timeline>
					<TimelineItem label={dayjs().add(-0.25, 'hours').format('LT')} color='primary'>
					{/* <TimelineItem label={dayjs().subtract(0.25, 'hours').format('LT')} color='primary'>					 */}
					프랑스에서 확장 라이선스를 구입했습니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-4.54, 'hours').format('LT')} color='success'>
						<Popovers desc='5 stars' trigger='hover'>
							<span>
								<Icon icon='Star' color='warning' />
								<Icon icon='Star' color='warning' />
								<Icon icon='Star' color='warning' />
								<Icon icon='Star' color='warning' />
								<Icon icon='Star' color='warning' />
							</span>
						</Popovers>
						<b>, 새로운 평가를 받았습니다.</b>
					</TimelineItem>
					<TimelineItem label={dayjs().add(-9.34, 'hours').format('LT')} color='warning'>
						고객의 문제가 해결되었습니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-1, 'day').fromNow()} color='primary'>
						영국에서 일반 라이선스를 구매했습니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-1, 'day').fromNow()} color='primary'>
					이탈리아에서 정기 라이선스를 구매했습니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-2, 'day').fromNow()} color='info'>
						<span className='text-muted'>
						새 버전이 출시되었습니다.{' '}
							<a href='/src/pages' className='fw-bold'>
								V12.1.0
							</a>
						</span>
					</TimelineItem>
					<TimelineItem label={dayjs().add(-3, 'day').fromNow()} color='danger'>
						새 제품에 대한 시장 조사 미팅입니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-7, 'day').fromNow()} color='secondary'>
						제품 소개 페이지의 업데이트, 컴파일 및 라이브로 이동 중입니다.
					</TimelineItem>
					<TimelineItem label={dayjs().add(-8, 'day').fromNow()} color='primary'>
						독일에서 정기 라이선스를 구매했습니다.
					</TimelineItem>
				</Timeline>
			</CardBody>
		</Card>
	);
};

export default CommonDashboardRecentActivities;
