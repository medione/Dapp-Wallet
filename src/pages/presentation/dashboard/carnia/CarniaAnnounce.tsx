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
import announceData from './data/dummyAnnounceData';
import useDarkMode from '../../../../hooks/useDarkMode';
import Bitcoin from './image/bit.png'
import Icon from '../../../../components/icon/Icon';
import { Link, useLocation } from 'react-router-dom';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import { TModalFullScreen, TModalSize } from '../../../../type/modal-type';
import CarniaAnnounceSel from './sub/CarniaAnnounceSel';
import { title } from 'process';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import useDeviceScreen from '../../../../hooks/useDeviceScreen';

interface IAnnounceDataItemProps {
	id: number;
	title: string;
	yymmddss: string;
}
const AnnounceDataItem: FC<IAnnounceDataItemProps> = ({ id, title, yymmddss}) => {

	const { darkModeStatus } = useDarkMode();
	const [state, setState] = useState(false);

	const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);

	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};

	const [longContentStatus, setLongContentStatus] = useState(false);
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);	

	const deviceScreen = useDeviceScreen();
	const location = useLocation();

	// console.log(`CarniaAnnounce > deviceScreen`)
	// console.log(deviceScreen);
		
	// console.log(`CarniaAnnounce > location`)
	// console.log(location);

	return (
		<>
			{/* <PageWrapper title='CarniaAnnounce'> */}
				<div className='col-12'>
					{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
					<div className='row'>
							<div className='col d-flex align-items-center'>
								<div className='d-flex flex-column justify-content-start'>
									<div>
										<Button
											isLink
											onClick={() => {
												initialStatus();
												// setFullScreenStatus('xxl');
												setFullScreenStatus(true);								
												setState(true);
											}}
											className='d-inline-block text-truncate'
										>
											{/* {title.substring(0,37)}{title.length > 37 ? "..." : null} */}
											{title.length > 37 ? `${title.substring(0,37)}...` : title}										
										</Button>
									</div>
									<div>
										<Button
											isLink
											onClick={() => {
												initialStatus();
												// setFullScreenStatus('xxl');
												setFullScreenStatus(true);																				
												setState(true);
											}}
										>									
											<div className='fs-6 text-muted'>{yymmddss}</div>
										</Button>
									</div>
								</div>
							</div>
							<div className='col-auto text-end'>

							</div>
						<hr/>
					</div>
				</div>
				<Modal
					isOpen={state}
					setIsOpen={setState}
					titleId='exampleModalLabel'
					fullScreen={fullScreenStatus}
				>
					<ModalHeader setIsOpen={headerCloseStatus ? setState : undefined}>
							<ModalTitle id=''
								className='d-flex flex-row justify-content-center fs-4 ms-3'
							>
								공지사항(상세)
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
							onClick={() => setState(false)}>
							닫기
						</Button>
					</ModalFooter>
				</Modal>
			{/* </PageWrapper>					 */}
		</>
	);
};

const CarniaAnnounce = () => {
	
	const [ isYesterDay, setYesterDay ]  = useState<boolean>(true);
	const [ isRctWeek, setisRctWeek ]  = useState<boolean>(false);
	const [state, setState] = useState(false);
  const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);	
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);

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

	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};


	return (
		<>
		{/* <PageWrapper title='CarniaAnnounce'> */}
			{/* <Card className='h-50'> */}
			{/* <Card style={{height:500}}>			 */}
			<Card stretch style={{height:500}}>								
				<CardHeader>
						<div className='container d-flex justify-content-between'>
							<div>
								<CardLabel icon='Campaign' iconColor='success' className='mb-4'>
								<	CardTitle tag='div' className='h5'>
										공지사항
									</CardTitle>
								</CardLabel>
							</div>
							<div>
							<div className='d-flex justify-content-end'>
								<div>
									<CardActions>
										<Button
											color="light"
											// isLight
											tag='a'
											// to='/subTopCoin'
											onClick={() => {
												initialStatus();
												// setFullScreenStatus('xxl');
												setFullScreenStatus(true);												
												setState(true);
											}}											
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
					<div className='row g-0'>
						{announceData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							// <AnnounceDataItem key={i.id} {...i} />

							<AnnounceDataItem key={i.id} {...i} />
						))}
					</div>
				</CardBody>
			</Card>
		{/* </PageWrapper> */}
		<Modal
					isOpen={state}
					setIsOpen={setState}
					titleId='exampleModalLabel'
					fullScreen={fullScreenStatus}
				>
					<ModalHeader setIsOpen={headerCloseStatus ? setState : undefined}>
							<ModalTitle id=''
								className='d-flex flex-row justify-content-center fs-4 ms-3'
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
							onClick={() => setState(false)}>
							닫기
						</Button>
					</ModalFooter>
				</Modal>		
		{/* </PageWrapper>			 */}
	</>
	);
};

export default CarniaAnnounce;