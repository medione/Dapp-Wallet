import React, { useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import CommonFriend from '../common/CommonFriend';
import CommonAddr from '../common/CommonAddr';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

type TListTab = '친구' | '주소';
const CarniaWalletFuncCoinDetSRtn = () => {
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
		<PageWrapper title='CarniaWalletFuncCoinDetSRtn'>
			<Card>
				<CardActions className='h2'>
					{/* <Button
						color='primary'
						isLink
						tag='a'
						// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
						to="/coinsdet"
					>		
						<h1>{'<'}</h1>

					</Button>
					<div className='d-flex justify-content-center'>
						Bitcoin 전송
					</div>		 */}
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
								to="/coinsdet"
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

export default CarniaWalletFuncCoinDetSRtn;
