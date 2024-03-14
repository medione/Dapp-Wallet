import React, { useContext, useEffect, useState } from 'react';
import { useTour } from '@reactour/tour';
import useDarkMode from '../../../hooks/useDarkMode';
import { demoPagesMenu } from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { TABS, TTabs } from './common/helper';
import ThemeContext from '../../../contexts/themeContext';

import CarniaCarousel from './carnia/CarniaCarousel';
import CarniaMenus from './carnia/CarniaMenus';
import CommonDashboardAlert from './common/CommonDashboardAlert';
import CarniaCoinRaise from './carnia/CarniaCoinRaise';
import CarniaEvent from './carnia/CarniaEvent';
import CarniaAnnounce from './carnia/CarniaAnnounce';
import CarniaCoinSwapRaise from './carnia/CarniaCoinSwapRaise';

const DashboardPage = () => {
	const { mobileDesign } = useContext(ThemeContext);
	const { setIsOpen } = useTour();
	const { themeStatus } = useDarkMode();
	const [activeTab, setActiveTab] = useState<TTabs>(TABS.YEARLY);
	
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown' && !mobileDesign) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 7000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageWrapper title={'DashboardPage'}>
			<div className='col-12 mt-0'>
					<CarniaCarousel />
			</div>
			<Page container='fluid'>
				<div className='row'>

					{/* Carousel */}
					{/* <div className='col-12'> */}
						{/* <CarniaCarousel /> */}
					{/* </div> */}

					{/* 지갑 | 커네트 | 친구 | 대화 | 스왑 | 이벤트 | 공지 */}
					<div className='col-12'>
						<CarniaMenus />
					</div>

					{/* 축하 메시지 */}
					<div className='col-12'>
						<CommonDashboardAlert />
					</div>

					{/* 가장 많이 상승한 코인	*/}
					<div className='col-xxl-3 col-xl-3 col-lg-6 col-sm-12'>
						<CarniaCoinRaise />
					</div>

					{/* 이벤트	*/}
					<div className='col-xxl-3 col-xl-3 col-lg-6 col-sm-12'>
						<CarniaEvent />
					</div>

					{/* 공지사항	*/}
					<div className='col-xxl-3 col-xl-3 col-lg-6 col-sm-12'>
						<CarniaAnnounce />
					</div>

					{/* 가장 많이 스왑된 코인	(24h) */}
					<div className='col-xxl-3 col-xl-3 col-lg-6 col-sm-12' id='CarniaCoinSwapRaise'
							style={{height:520}}
					>
						<CarniaCoinSwapRaise />
					</div>

				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
