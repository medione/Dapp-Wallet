import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import coinSwapSndData from './data/dummyNCoinSwapSndData';
import coinSwapRcvData from './data/dummyNCoinSwapRcvData';
import useDarkMode from '../../../../hooks/useDarkMode';
import Icon from '../../../../components/icon/Icon';
import { Link } from 'react-router-dom';

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
		<>
		<div className='col-12'>
			{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
			<div className='row'>
					<div className='col d-flex align-items-center'>
						<div className='flex-shrink-0'>
							{/* <Link to={`/subTopCoin/${id}`}> */}
							<Link to={`/coinraisedet`}>
								<img src={image} style={{width: 28}} alt='이미지' />
							</Link>
								&nbsp;&nbsp;
						</div>
						<div className='flex-grow-1'>
							{/* <Link to={`/subTopCoin/${id}`}> */}
							<Link to={`/coinraisedet`} className='text-decoration-none'>
								<div className='fs-6'>{name}</div>
							</Link>

							<Link to={`/coinraisedet`} className='text-muted text-decoration-none'>
								<div className='fs-6'>{type}</div>
							</Link>
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
		</>
	);
};

const CarniaCoinSwapRaise = () => {
	const [ isRcvCoin, setYesterDay ]  = useState<boolean>(true);
	const [ isSndCoin, setisSndCoin ]  = useState<boolean>(false);
		
	const setPrintButton = (btn:string) => {
		// console.log('DefaultFooter.tsx > setFooterButton > btn')
		// console.log(btn)
		switch (btn) {
			case 'yesterday':
				setYesterDay(true)
				setisSndCoin(false);
				break;
			case 'rctweek':
				setYesterDay(false)
				setisSndCoin(true);
				break;
			default:
				return null
		}
	}

	return (
		<>
		{/* <PageWrapper title='CarniaCoinRaise'> */}
			<Card stretch style={{height:500}}>						
			{/* <Card className='h-50'> */}
				<CardHeader>
						<div className='container'>
							<div>
								<CardLabel icon='SwapHoriz' iconColor='secondary' className='mb-4'>
								<	CardTitle tag='div' className='h5'>
										가장 많이 스왑된 코인 (24h)
									</CardTitle>
								</CardLabel>
							</div>
							<div>
							<div className='d-flex justify-content-between'>
								<div className='me-5'>
									<ButtonGroup>
										<Button
											// icon='GridView'
											color={isRcvCoin ? 'primary': 'light'}
											// isLight
											tag='a'
											onClick={() => setPrintButton('yesterday')}
										>
											받은 코인
										</Button>
										<Button
											// icon='ViewDay'			
											color={isSndCoin ? 'primary': 'light'}
											tag='a'
											onClick={() => setPrintButton('rctweek')}
											className='me-3'
										>
											보낸 코인
										</Button>
									</ButtonGroup>										
								</div>
								<div>
									<CardActions>
										<Button
											color="light"
											// isLight
											tag='a'
											to='/subTopCoinSwap'
											className='text-dark'
										>
											더보기 {'>'}
										</Button>
									</CardActions>
								</div>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardBody isScrollable>
					<div className='row g-3'>
							{/* {coinData.map((i) => (
								// eslint-disable-next-line react/jsx-props-no-spreading
								<CoinDataItem key={i.id} {...i} />
							))} */}
						{ isRcvCoin 
							? (coinSwapSndData.map((i) => (
									<CoinDataItem key={i.id} {...i} />
								))) 
							:
							(coinSwapRcvData.map((i) => (
									<CoinDataItem key={i.id} {...i} />
							)))
						}
					</div>
				</CardBody>
			</Card>
		{/* </PageWrapper> */}
	</>
	);
};

export default CarniaCoinSwapRaise;