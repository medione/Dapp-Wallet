import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../../../layout/SubHeader/SubHeader';

import React, { useState } from 'react';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../../../components/icon/Icon';
import Button, { ButtonGroup } from '../../../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../../../../components/bootstrap/Dropdown';
import { color } from 'framer-motion';
import { TOffCanvasPlacement } from '../../../../../type/offCanvas-type';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../../components/bootstrap/OffCanvas';
import Cspr from '../image/cspr.png'
import { useNavigate } from 'react-router-dom';

const Chart = () => {
	const [offcanvasStatus, setOffcanvasStatus] = useState(false);
	const [backdropStatus, setBackdropStatus] = useState(true);
	const [bodyScrollStatus, setBodyScrollStatus] = useState(false);
	const [placement, setPlacement] = useState<TOffCanvasPlacement>('end');

	const [headerClose, setHeaderClose] = useState(true);

	const initialStatus = () => {
		setBackdropStatus(true);
		setBodyScrollStatus(false);
		setPlacement('end');
		setHeaderClose(true);
	};

	// const navigate = useNavigate();
	// const handleOnClickToEmployeeListPage = useCallback(
	// 	() => navigate(`../${demoPagesMenu.appointment.subMenu.employeeList.path}`),
	// 	[navigate],
	// );

  return (
			<Card>
					<div className='bg-primary rounded-3'>
						<CardHeader size='lg'  className='bg-primary text-white'>
							<div className='container'>
								<div className='d-flex justify-content-center h3 mb-3'>
									<div>
										<img src={Cspr} style={{width: 38}} alt='이미지' />
									</div>
								</div>    
								<div className='d-flex justify-content-center h3 mb-3'>
									0 CSPR
								</div>								
								<div className='d-flex justify-content-center h2 mb-3'>
									<div className='d-flex justify-content-center align-items-center me-2'>
										₩0
									</div>
 									<Button 
										color='light'
									>
										<small>0%</small>
									</Button>
								</div>
								<div className='d-flex justify-content-center mb-2 h5'>
									총매수 ₩0
								</div>
								<div className='d-flex justify-content-center mb-2 h5'>
									매수평균가 ₩0
								</div>
								<div className='d-flex justify-content-center mb-4 h7'>
									매수 평균가는 받는 시점 시세를 지정 통화로 환산해요
								</div>
								<div className='d-flex justify-content-center mb-4 text-decoration-underline'>
									<Button
										color='primary'
									>
										bc1q63j...vwxyz
									</Button>
									
								</div>
							</div>
						</CardHeader>
						<CardBody>						
						<div className='d-flex justify-content-center'>
								<div className='d-flex justify-content-center col-3 mb-4'>
									<div className='d-flex flex-column'>
										<Button
											// color='light'
											color="info"
											icon='ChevronRight'
											rounded='circle'
											// isLight
											tag='a'
											to='/stakingexchgsnd'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>
										<span className='mt-2 text-light'>보내기</span>
									</div>
								</div>
								<div className='d-flex justify-content-center col-3'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='ChevronLeft'
											rounded='circle'

											tag='a'
											to='/stakingexchgrcv'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>								
										<span className='mt-1 text-light mt-2 ms-2'>받기</span>										
									</div>
								</div>
								<div className='d-flex justify-content-center col-3'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='Money'
											rounded='circle'

											tag='a'
											// to='/stakingexchgrcv'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>								
										<span className='mt-1 text-light mt-2 me-1'>스테이킹</span>										
									</div>
								</div>								
							</div>
					</CardBody>
				</div>
				<div className='row'>
					<OffCanvas
						id='exampleOffcanvas'
						titleId='offcanvasExampleLabel'
						isOpen={offcanvasStatus}
						setOpen={setOffcanvasStatus}
						isBackdrop={backdropStatus}
						isBodyScroll={bodyScrollStatus}
						placement={placement}>
						<OffCanvasHeader setOpen={headerClose ? setOffcanvasStatus : undefined}>
							<OffCanvasTitle id='offcanvasExampleLabel'>
								스왑선택
							</OffCanvasTitle>
						</OffCanvasHeader>
						<OffCanvasBody>
							<div className='container'>
								<div className='mb-3'>
									<div>
										<Button
											icon='ChangeCircle'
											size='lg'
											// href='/'
											onClick={() => location.href=`/swap`} 
										>
										싱글체인 스왑
										</Button>
									</div>
									<div>
										&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;
										같은 체인의 코인을 교환해요
									</div>
								</div>
								<div>
									<div>
										<Button
											icon='ChangeCircle'
											size='lg'
											onClick={() => location.href='/swapc'} 											
										>
										코로스체인 스왑
										</Button>
									</div>
									<div>
										&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;
										다른 체인의 코인을 교환해요
									</div>
								</div>
							</div>
						</OffCanvasBody>
					</OffCanvas>
				</div>				
			</Card>
)};

export default Chart;
