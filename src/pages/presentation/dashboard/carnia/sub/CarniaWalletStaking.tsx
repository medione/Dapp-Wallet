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

const CarniaCoinRaiseDetBoard = () => {
	return (
		<>
			<div className='mt-3 h3'>
				<strong className='ms-2'>
					스테이킹
				</strong>
			</div>
			<Card stretch>
				<CardBody isScrollable
					className='h-25 mt-3'
				>
					<div className='d-flex justify-content-center h5 mb-2'>
						아직 스테이킹 중인 CSPR가 없어요.
					</div>
					<div className='d-flex justify-content-center h5 mb-5'>
						CSPR 스테이킹 하고, 이자 받아 보세요!
					</div>
					<div className='d-flex justify-content-center h3'>
						<Button
							color='light'
							tag='a'
							to='/stakingdet'
							className='h3'
						>
							스테이킹하기
						</Button>
					</div>	
				</CardBody>
			</Card>
		</>
	);
};

export default CarniaCoinRaiseDetBoard;
