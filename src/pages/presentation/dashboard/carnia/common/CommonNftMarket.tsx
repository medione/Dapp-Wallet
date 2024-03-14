import React, { FC } from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import nftData from './../data/dummyNFTData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import Nav, { NavItem } from '../../../../../components/bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Bitcoin from './image/bit.png'
import Icon from '../../../../../components/icon/Icon';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

interface INftDataItemProps {
	id: number;
	image: string;
	name: string;
	statement: string;
}
const NftDataItem: FC<INftDataItemProps> = ({ id, image, name, statement }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<>
		<div className='col-12'>
			{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
			<div className='row'>
				<div className='col d-flex align-items-center'>
					<div className='flex-shrink-0 me-3'>
						{/* <Link to={`/subTopCoin/${id}`}> */}
						<Link 
								target='_blank'												
								to={
								id === 1 
								? `${import.meta.env.VITE_OPENSEA_URL}`
								: (id === 2 
									? `${import.meta.env.VITE_LOOKSRARE_URL}`
									: `${import.meta.env.VITE_RARIBLE_URL}`
								  )}>
							<img src={image} style={{width: 33}} alt='이미지' />
						</Link>
							&nbsp;&nbsp;
					</div>
					<div className='flex-grow-1'>
						{/* <Link to={`/subTopCoin/${id}`}> */}
						<Link 
								target='_blank'						
								to={
									id === 1 
									? `${import.meta.env.VITE_OPENSEA_URL}`
									: (id === 2 
									? `${import.meta.env.VITE_LOOKSRARE_URL}`
									: `${import.meta.env.VITE_RARIBLE_URL}`
								)}
								className='text-decoration-none'
						>
							<div className='h3 text-dark'>{name}</div>
						</Link>
						{/* href={`${import.meta.env.VITE_COINDESKKOREA_URL}`} */}
						<Link
								target='_blank'												
								to={
									id === 1 
									? `${import.meta.env.VITE_OPENSEA_URL}`
									: (id === 2 
										? `${import.meta.env.VITE_LOOKSRARE_URL}`
										: `${import.meta.env.VITE_RARIBLE_URL}`
								 )}
								className='text-muted text-decoration-none'
							>
							<div className='fs-6'>{statement}</div>
						</Link>
					</div>
				</div>
				<hr/>
			</div>
		</div>
		</>
	);
};

const CommonNftMarket = () => {
	return (
		<>
		<PageWrapper title='CommonNftMarket'>
			<Card style={{height:500}}>
				<CardBody isScrollable>
					<div className='row g-3'>
						{nftData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<NftDataItem key={i.id} {...i} />
						))}
					</div>
				</CardBody>
			</Card>
		</PageWrapper>
	</>
	);
};

export default CommonNftMarket;