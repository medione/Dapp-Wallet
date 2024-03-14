import React from 'react';
import Alert, { AlertHeading } from '../../../../components/bootstrap/Alert';
import BootstrapVariablesPage from '../../../documentation/getting-started/BootstrapVariablesPage';

const CommonDashboardAlert = () => {
	return (
		<>
			{/* <a
				href='#CarniaCoinSwapRaise'
				style={{textDecoration:'none'}}		
			>
				{"'"}가장 많이 스왑된 코인(24h){"'"}로 이동
			</a> */}
			<Alert
				icon='Verified'
				isLight
				color='primary'
				borderWidth={0}
				className='shadow-3d-primary'
				isDismissible>
				<AlertHeading tag='h2' className='h4'>
					축하합니다! 🎉
				</AlertHeading>
				<span>월간 목표를 달성하셨습니다.</span>
			</Alert>
		</>
	);
};

export default CommonDashboardAlert;
