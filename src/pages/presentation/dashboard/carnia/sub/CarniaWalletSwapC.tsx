import React, { useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import CommonSingleChain from '../common/CommonSingleChain';
import CommonACrossChain from '../common/CommonCrossChain';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

type TListTab = '싱글체인 스왑' | '크로스체인 스왑';

const CarniaWalletSwapC = () => {
	// BEGIN :: List Tab
	const LIST_TAB: { [key: string]: TListTab } = {
		SINGLE_CHAIN: '싱글체인 스왑',
		CROSS_CHAIN: '크로스체인 스왑',
	};
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.CROSS_CHAIN);
	const handleActiveListTab = (tabName: TListTab) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName: TListTab): 'info' | 'light' => {
		if (activeListTab === tabName) return 'info';
		return 'light';
	};
	// END :: List Tab

	return (
		<PageWrapper title='CarniaWalletSwapC'>
			<Card className='container-fluid'>
				<CardActions className='h2'>
					{/* <Button
						color='primary'
						isLink
						tag='a'
						// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
						to="/wallet"
					>		
						<h1>{'<'}</h1>
					</Button>
							스왑 */}
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
						<div className='col-4 d-flex justify-content-center h3 me-5'>
							스왑
						</div>
						<div className='col-4 d-flex justify-content-end'>
							<div className='me-5'>
								{/* 코인 정보 */}
							</div>
						</div>
					</div>
				</CardActions>
				<CardHeader>
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
					{activeListTab === LIST_TAB.SINGLE_CHAIN && <CommonSingleChain />}
					{activeListTab === LIST_TAB.CROSS_CHAIN && <CommonACrossChain />}
				</CardBody>
			</Card>
		</PageWrapper>
	);
};

export default CarniaWalletSwapC;
