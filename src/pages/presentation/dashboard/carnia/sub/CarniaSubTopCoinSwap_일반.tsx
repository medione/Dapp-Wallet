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
import coinSwapData from '../data/dummyNDCoinSwapData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import Icon from '../../../../../components/icon/Icon';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';

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
					 onClick={() => location.href=`/swap`}
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
							{/* <strong>{priceFormat(price)}</strong> */}
							<strong>₩ {price}</strong>
						</div>
						<div className='text-muted'>
							{ count < 0 ? (
										<Icon
											icon='ArrowDropDown'
											color='success'		
											size='2x'
										/>
								)	: (count == 0 || (
									<Icon 
									icon='ArrowDropUp'
									color='danger'
									size='2x'
								/>								
								))
							}
							<small>
								{count}%
							</small>
						</div>
					</div>
					<hr/>
			</div>
		</div>
	);
};

const CarniaSubTopCoinSwap = () => {
	return (
		<>
			<PageWrapper title={'CarniaSubTopCoinSwap'}>
				<Card stretch>
					<CardHeader className='d-flex flex-row'>
						<CardActions>
							<Button
								color='primary'
								isLink
								// icon='Summarize'
								tag='a'
								// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
								to="/"
								// href='/'
								>		
								<h1>{'<'}</h1>
							</Button>
							<CardLabel icon='setting'>
							<CardTitle tag='div' className='h5'>
								스왑
							</CardTitle>
							</CardLabel>					
						</CardActions>
					</CardHeader>
					<CardBody isScrollable>
						<div className='row g-3'>
							{coinSwapData.map((i) => (
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

export default CarniaSubTopCoinSwap;
