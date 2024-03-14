import React, { FC } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import coinData from '../data/dummyCoinNewsData';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Button from '../../../../../components/bootstrap/Button';

interface ICoinDataItemProps {
	id: number;
	title: string;
	content: string;
}
const CoinDataItem: FC<ICoinDataItemProps> = ({ id, title, content }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		// <div className='col-auto'>
		<div className='col-12'>				
			<Button
				tag='a'
				target='_blank'
				className='w-100'
				
				// href='www.coindeskkorea.com'
				href={`${import.meta.env.VITE_COINDESKKOREA_URL}`}
			>
				<div
						//  onClick={() => window.open('www.coindeskkorea.com')} 					
				>
						<div className='col'>
							<div>
								<div className='fs-6 align-items-center'>{title}</div>
								<div className='text-muted'>
									<small>{content}</small>
								</div>
							</div>
						</div>
						{/* <hr/> */}
				</div>
			</Button>
		</div>
	);
};

const CarniaWalletCoinsDetQry = () => {
	return (
		<>
		<PageWrapper title='CarniaWalletCoinsDetQry'>
		{/* <div className='container bg-warning'> 
									<div className='d-flex justify-content-between'>
										<div className='h5'>
											거래 내역
										</div>
										<div>
											더보기 {'>'}
										</div>
									</div>
								</div>			 */}
			<Card stretch>
				<CardHeader className='d-flex flex-row'>
					{/* <CardActions> */}
						<CardLabel>
							<CardTitle>
								거래 내역
							</CardTitle>
							<CardSubTitle>
								<Button
									tag='a'
									to='/coinsdetqrysel'
								>
									더보기 {'>'}
								</Button>
							</CardSubTitle>							
						</CardLabel>					
					{/* </CardActions> */}
				</CardHeader>
				<CardBody isScrollable
					className='mb-5'
				>
					{/* <div className='row g-3'>
						{coinData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<CoinDataItem key={i.id} {...i} />
						))}
					</div> */}
					<div className='d-flex justify-content-center h5 mb-5'>
						아직 거래 내역이 없어요
					</div>
				</CardBody>
			</Card>
			{/* <CardTabItem 
					id="tab-1"
					title='전일대비'
					>
					</CardTabItem>
					<CardTabItem 
						id="tab-2"
						title='최근 일주일'
					>
				</CardTabItem> */}
			</PageWrapper>
		</>
	);
};

export default CarniaWalletCoinsDetQry;
