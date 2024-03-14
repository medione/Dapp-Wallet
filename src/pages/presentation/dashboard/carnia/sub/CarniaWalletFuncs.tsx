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


const Chart = () => {
	const [offcanvasStatus, setOffcanvasStatus] = useState(false);
	// const [backdropStatus, setBackdropStatus] = useState(true);
	const [bodyScrollStatus, setBodyScrollStatus] = useState(false);
	const [placement, setPlacement] = useState<TOffCanvasPlacement>('end');

	const [headerClose, setHeaderClose] = useState(true);

	const initialStatus = () => {
		// setBackdropStatus(true);
		setBodyScrollStatus(false);
		setPlacement('end');
		setHeaderClose(true);
	};

  return (
			<Card col-xxl-12>
				{/* <div style={{backgroundColor:'blue'}}> */}
					<div className='bg-primary rounded-3'>
						<CardHeader size='lg'  className='bg-primary text-white'>
							<div className='container d-flex row justify-content-start'>
								<div className='d-flex align-items-center h3 '>
									<div>
										호야 지갑
									</div>
									<div>
										<Button
											color='primary'
											icon='ArrowRight'
											size='lg'
											to=''
										/>
									</div>
								</div>    
								<div className='h2'>
									₩0
								</div>
							</div>
						</CardHeader>
						<CardBody>						
						<div className='d-flex justify-content-content'>
								<div className='d-flex justify-content-center col-3 mb-4'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='CallMade'
											rounded='circle'
											tag='a'
											to='/funccoinsels'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>
										<span className='mt-1 text-light'>보내기</span>
									</div>
								</div>
								<div className='d-flex justify-content-center col-3'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='CallReceived'
											rounded='circle'
											tag='a'
											to='/funccoinselr'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>								
										<span className='mt-1 text-light'>&nbsp;&nbsp;받기</span>										
									</div>
								</div>
								<div className='d-flex justify-content-center col-3'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='ChangeCircle'
											rounded='circle'

											tag='a'
											// to='/funccoinsels'
											size='lg'
											onClick={() => {
												initialStatus();
												setPlacement('bottom');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'					
											>
										</Button>
										<span className='mt-1 text-light'>&nbsp;&nbsp;스왑</span>														
									</div>
								</div>
								<div className='d-flex justify-content-center col-3'>
									<div className='d-flex flex-column'>
										<Button
											color="info"
											icon='HistoryEdu'
											rounded='circle'

											tag='a'
											to='/funccoinsels'
											size='lg'
											// onClick={() => alert('개발중입니다.')}								
											>
										</Button>
										<span className='mt-1 text-light'>거래내역</span>													
									</div>
								</div>										
							</div>
					</CardBody>
				{/* <CardFooter>
				</CardFooter> */}
				</div>
				<div className='row'>
					{/* placement */}
					{/* <div className='col-lg-6'>
						<Card stretch>
							<CardBody>
								<div className='row g-4'>
									<div className='col-auto'>
										<Button
											color='success'
											isLight
											icon='North'
											onClick={() => {
												initialStatus();
												setPlacement('bottom');
												setOffcanvasStatus(true);
											}}
											aria-controls='exampleOffcanvas'>
											placement="bottom"
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div> */}

					{/* 스왑 클릭시 */}
					<OffCanvas
						id='exampleOffcanvas'
						titleId='offcanvasExampleLabel'
						isOpen={offcanvasStatus}
						setOpen={setOffcanvasStatus}
						// isBackdrop={backdropStatus}
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
