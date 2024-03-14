import React, { FC } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import coinData from '../data/dummyCoinNewsData';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Button from '../../../../../components/bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface ICoinDataItemProps {
	id: number;
	title: string;
	content: string;
}
const CoinDataItem: FC<ICoinDataItemProps> = ({ id, title, content }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		// <div className='col-auto'>
		<div className='col-xxl-12'>				
			<Link
				// target='_blank'
				target='_blank'				
				// className='w-100'
				to={`${import.meta.env.VITE_COINDESKKOREA_URL}`}
				className={classNames(
					'text-decoration-none',
				)}
			>
				<div>
					<div>
						<div>
							<div className='fs-6 align-items-center'
							>
								{title}
							</div>
							<div className='text-muted'>
								<small>{content}</small>
							</div>
						</div>
					</div>
					<hr/>
				</div>
			</Link>
		</div>
	);
};

const CarniaCoinRaiseDetBoard = () => {
	return (
		<>
		<PageWrapper title='CarniaCoinRaiseDetBoard'>
			<Card style={{height:500}} stretch>
				<CardHeader className='d-flex flex-row'>
					<CardActions>
						<CardLabel icon='setting'>
							<CardTitle tag='div' className='h5'>
								코인 뉴스
							</CardTitle>
						</CardLabel>					
					</CardActions>
				</CardHeader>
				<CardBody isScrollable>
					<div className='row g-3'>
						{coinData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<CoinDataItem key={i.id} {...i} />
						))}
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

export default CarniaCoinRaiseDetBoard;
