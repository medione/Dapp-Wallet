import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTabItem,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../../../../components/bootstrap/Button';
import coinData from '../data/dummyNDCoinData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import { right } from '@popperjs/core';
import Icon from '../../../../../components/icon/Icon';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../../../../components/bootstrap/Dropdown';
import Page from '../../../../../layout/Page/Page';

interface ICoinDataItemProps {
	id: number;
	image: string;
	name: string;
	type: string;
	price: number;
	count: number;
}
const CoinDataItem: FC<ICoinDataItemProps> = ({ id, image, name, type, price, count }) => {
	const { darkModeStatus } = useDarkMode();
		
	return (
		<div className='col-12'>
			{/* <div className='row'> */}
			<div className='row' 
					//  onClick={() => location.href=`/profile/${id}`} 
					 onClick={() => location.href='/coinsdet'} 					 
					 style={{cursor: 'pointer'}}
			>
					<div className='col d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<img src={image} style={{width: 28}} alt='이미지' />
							&nbsp;&nbsp;
						</div>
						<div className='flex-grow-1'>
							<div className='fs-6'>{name}</div>
							<div className='text-muted'>
								<small>{type}</small>
							</div>
						</div>
					</div>
					<div className='col-auto text-end'>
						<div>
								{price}
						</div>
					</div>
					<hr/>
			</div>
		</div>
	);
};

const CarniaWalletCoins = () => {
	const [toggleBody, setToggleBody] = useState(true);

	return (
		<>
			{/* <PageWrapper title='CarniaWalletCoins'> */}
			<div className='d-flex justify-content-between mt-3'>
				<div className='d-flex align-items-center'>
					<div className='mt-1 h3'>
						<strong className='ms-2 mt-2'>
							코인
						</strong>
					</div>
					<small className='ms-1'>
							(변동율 : 24시간)
					</small>
				</div>
				<div>
					<Button
						icon="ArrowDropDownCircle"
						color={toggleBody ? 'sucess' : 'light'}
						hoverShadow="default"
						isLight
						onClick={() => setToggleBody(!toggleBody)}								
					>
						소액 자산 숨기기
					</Button>
				</div>
			</div>					
			<Card>
				<CardBody>
					{toggleBody &&
						<div className='row g-3'>
							{coinData.map((i) => (
								// eslint-disable-next-line react/jsx-props-no-spreading
								<CoinDataItem key={i.id} {...i} />
							))}
						</div>
					}
				</CardBody>
			</Card>
			{/* </PageWrapper> */}
		</>
	);
};

export default CarniaWalletCoins;
