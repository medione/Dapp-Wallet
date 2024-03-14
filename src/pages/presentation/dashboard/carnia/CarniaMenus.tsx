import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import { ApexOptions } from 'apexcharts';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Card, {
	CardBody,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import eventData from './data/dummyEventData';
import useDarkMode from '../../../../hooks/useDarkMode';
import { carniaPagesMenu } from '../../../../menu';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import { TModalFullScreen, TModalSize } from '../../../../type/modal-type';

import CarniaEventSel from './sub/CarniaEventSel';
import CarniaAnnounceSel from './sub/CarniaAnnounceSel';

const CarniaMenus = () => {

	////////////////////// 이벤트 관련 /////////////////////
	const [state, setState] = useState(false);
  const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);	
	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);	

	const [state2, setState2] = useState(false);
  const [fullScreenStatus2, setFullScreenStatus2] = useState<TModalFullScreen | undefined>(
		undefined,
	);	


	////////////////////// 공지사항 관련 /////////////////////
	const initialStatus2 = () => {
		setFullScreenStatus(undefined);
	};
	const [headerCloseStatus2, setHeaderCloseStatus2] = useState(true);	

	return (
		<>
		<Card stretch>
			<CardBody>
					<div className='d-flex justify-content-center'>
						<div className='d-flex justify-content-center col-3 mb-4'>
							<div className='d-flex flex-column'>
								<Button
									color='primary'
									icon='AccountBalanceWallet'
									isLight
									tag='a'
									to='/wallet'
									size='lg'
									// onClick={() => alert('개발중입니다.')}								
									>
								</Button>
								<span className='mt-1'>&nbsp;&nbsp;지갑</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3'>
							<div className='d-flex flex-column'>
								<Button
									color='primary'
									icon='Link'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'
									onClick={() => alert('개발중입니다.')}								
									>
								</Button>
								<span className='mt-1'>커넥트</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3'>
							<div className='d-flex flex-column'>
								<Button
									color='success'
									icon='People'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'
									onClick={() => alert('개발중입니다.')}								
									>
								</Button>
								<span className='mt-1'>&nbsp;&nbsp;친구</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3'>
							<div className='d-flex flex-column'>
								<Button
									color='success'
									icon='Chat'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'
									onClick={() => alert('개발중입니다.')}								
									>
								</Button>
								<span className='mt-1'>&nbsp;&nbsp;대화</span>
							</div>
						</div>										
					</div>
					<div className='d-flex justify-content-center'>
						<div className='d-flex justify-content-center col-3'>
							<div className='d-flex flex-column'>
								<Button
									color='secondary'
									icon='SwapHoriz'
									isLight
									tag='a'
									// to='/subTopCoin'
									to={`../${carniaPagesMenu.carniaSubTopCoin.path}`}
									size='lg'
									// onClick={() => alert('개발중입니다.')}
									>
								</Button>
								<span className='mt-1'>&nbsp;&nbsp;스왑</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3 mr-2'>
							<div className='d-flex flex-column'>
								<Button
									color='warning'
									icon='EventAvailable'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'	
									onClick={() => {
										initialStatus();
										// setFullScreenStatus('xxl');
										setFullScreenStatus(true);										
										setState(true);
									}}									
									>
								</Button>
								<span className='mt-1'>이벤트</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3'>
							<div className='d-flex flex-column'>
								{/* <Button
									color='info'
									icon='Notifications'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'
									onClick={() => alert('개발중입니다.')}								
									>
								</Button> */}
								<Button
									color='info'
									icon='Notifications'
									isLight
									tag='a'
									// to='/somefile.txt'
									size='lg'	
									onClick={() => {
										initialStatus2();
										// setFullScreenStatus2('xxl');
										setFullScreenStatus2(true);										
										setState2(true);
									}}									
									>
								</Button>								
								<span className='mt-1'>&nbsp;&nbsp;공지</span>
							</div>
						</div>
						<div className='d-flex justify-content-center col-3' />
					</div>					
			</CardBody>					
		</Card>
		<Modal
		isOpen={state}
		setIsOpen={setState}
		titleId='exampleModalLabel'
		fullScreen={fullScreenStatus}
	>
		<ModalHeader setIsOpen={headerCloseStatus ? setState : undefined}>
				<ModalTitle id=''
					className='d-flex flex-row justify-content-center'
				>
					이벤트
				</ModalTitle>
		</ModalHeader>
		<ModalBody>
			<CarniaEventSel />
		</ModalBody>
		<ModalFooter>
			<Button
				color='info'
				isOutline
				className='border-0'
				onClick={() => setState(false)}>
				닫기
			</Button>
		</ModalFooter>
	</Modal>

	<Modal
		isOpen={state2}
		setIsOpen={setState2}
		titleId='exampleModalLabel2'
		fullScreen={fullScreenStatus2}
	>
		<ModalHeader setIsOpen={headerCloseStatus2 ? setState2 : undefined}>
				<ModalTitle id=''
					className='d-flex flex-row justify-content-center'
				>
					공지사항
				</ModalTitle>
		</ModalHeader>
		<ModalBody>
			<CarniaAnnounceSel />
		</ModalBody>
		<ModalFooter>
			<Button
				color='info'
				isOutline
				className='border-0'
				onClick={() => setState2(false)}>
				닫기
			</Button>
		</ModalFooter>
	</Modal>													
	</>
	);
};

export default CarniaMenus;
