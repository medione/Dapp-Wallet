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
import coinData from './data/dummyNCoinData';
import coinDataWeek from './data/dummyNCoinDataWeek';
import { getFirstLetter, priceFormat } from '../../../../helpers/helpers';
import useDarkMode from '../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../menu';
import Nav, { NavItem } from '../../../../components/bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import Bitcoin from './image/bit.png'
import Icon from '../../../../components/icon/Icon';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import { useQuery } from "@tanstack/react-query";
import testRequest from './utils/testRequest';

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

	const navigate = useNavigate()

	const handleClick = () => {
		const data = {
			name: "John Doe",
			age: 30,
		};
		navigate("/coinraisedet",{state:data})
	}

	return (
		<>
		<div className='col-12'>
			{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
			<div className='row'>
					<div className='col d-flex align-items-center'>
						<div className='flex-shrink-0'>
							{/* <Link to={`/subTopCoin/${id}`}> */}
							<Link 
									to={`/coinraisedet#kgh`}
									// onClick={handleClick}
							>
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

const CarniaCoinRaise = () => {
	const [ isYesterDay, setYesterDay ]  = useState<boolean>(true);
	const [ isRctWeek, setisRctWeek ]  = useState<boolean>(false);
		
	const setPrintButton = (btn:string) => {
		// console.log('DefaultFooter.tsx > setFooterButton > btn')
		// console.log(btn)
		switch (btn) {
			case 'yesterday':
				setYesterDay(true)
				setisRctWeek(false);
				break;
			case 'rctweek':
				setYesterDay(false)
				setisRctWeek(true);
				break;
			default:
				return null
		}
	}

	const site_id = 1;
  const { isLoading, error, data } = useQuery({
    // queryKey: ['gigUser'],   //데이터를 캐시하는 데 사용되는 키
    // queryKey: [item.userId],    //데이터를 캐시하는 데 사용되는 키   *** 중요 : 데이터 2개 이상시 키 값이 변해야 함 ***
    queryKey: [site_id],    //데이터를 캐시하는 데 사용되는 키   *** 중요 : 데이터 2개 이상시 키 값이 변해야 함 ***    
    queryFn: () => 
      testRequest
        .get(
          // `/users/${item.userId}`
          `/users/${site_id}`					
        )
        .then((res) => {
          console.log('CarniaCoinRaise.tsx')
          console.log(res.data)
          return res.data;
        }),
  })

	return (
		<>
		{/* <PageWrapper title='CarniaCoinRaise'> */}
			<Card stretch style={{height:500}}>						
			{/* <Card className='h-50'> */}
				<CardHeader>
						<div className='container'>
							<div>
								<CardLabel icon='Moving' iconColor='primary' className='mb-4'>
								<	CardTitle tag='div' className='h5'>
										가장 많이 상승한 코인
									</CardTitle>
								</CardLabel>
							</div>
							<div>
							<div className='d-flex justify-content-between'>
								<div className='me-5'>
									<ButtonGroup>
										<Button
											// icon='GridView'
											color={isYesterDay ? 'primary': 'light'}
											// isLight
											tag='a'
											onClick={() => setPrintButton('yesterday')}
										>
											전일대비
										</Button>
										<Button
											// icon='ViewDay'			
											color={isRctWeek ? 'primary': 'light'}
											tag='a'
											onClick={() => setPrintButton('rctweek')}
											className='me-3'
										>
											최근일주일
										</Button>
									</ButtonGroup>										
								</div>
								<div>
									<CardActions>
										<Button
											color="light"
											// isLight
											tag='a'
											to='/subTopCoin'
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
						{ isYesterDay 
							? (coinData.map((i) => (
									<CoinDataItem key={i.id} {...i} />
								))) 
							:
							(coinDataWeek.map((i) => (
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

export default CarniaCoinRaise;