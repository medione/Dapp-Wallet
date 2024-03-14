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
import eventData from './data/dummyEventData';
import useDarkMode from '../../../../hooks/useDarkMode';
import Bitcoin from './image/bit.png'
import Icon from '../../../../components/icon/Icon';
import { Link } from 'react-router-dom';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import { TModalFullScreen, TModalSize } from '../../../../type/modal-type';
import CarniaEventSel from './sub/CarniaEventSel';

interface IEventDataItemProps {
	id: number;
	image: string;
	name: string;
	type1: string;
	type2: string;	
}

const EventDataItem: FC<IEventDataItemProps> = ({ id, image, name, type1, type2 }) => {
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
	
	return (
		<>
			<div className='col-12'>
				{/* <div className='row' onClick={() => location.href='/'} style={{cursor: 'pointer'}}> */}
				<div className='row'>
						<div className='col d-flex align-items-center'>
							<div className='flex-shrink-0'>
								{/* <Link to={`/subTopCoin/${id}`}> */}
								{/* <Link to={`/coinraisedet`}>
									<img src={image} style={{width: 119}} alt='이미지' />
								</Link> */}
								<Button
										isLink
										className='me-2'
										onClick={() => {
											initialStatus();
											// setFullScreenStatus('xxl');
											setFullScreenStatus(true);											
											setState(true);
										}}
									>									
										<img src={image} style={{width: 180}} alt='이미지' />
									</Button>								
							</div>
							{/* <div className='flex-grow-1'> */}
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
									>									
										{name}
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
										<div className='fs-6 text-primary'>{type1}</div>
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
										<div className='fs-6 text-primary'>{type2}</div>
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
		</>
	);
};

const CarniaEvent = () => {
	
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

	// console.log('CarniaEvent > fullScreenStatus')
	// console.log(fullScreenStatus)

	return (
		<>
		{/* <PageWrapper title='CarniaEvent'> */}
			{/* <Card className='h-50'> */}
			{/* <Card style={{height:500}}>			 */}
			<Card stretch style={{height:500}}>					
				 <CardHeader>
						<div className='container d-flex justify-content-between'>
							<div>
								<CardLabel icon='CalendarToday' iconColor='warning' className='mb-4'>
								<	CardTitle tag='div' className='h5'>
										이벤트
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
												// tag='a'
												// to='/subTopCoin'
												className='text-dark'
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
					<div className='row g-3'>
						{eventData.map((i) => (
							// eslint-disable-next-line react/jsx-props-no-spreading
							<EventDataItem key={i.id} {...i} />
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
	</>
	);
};

export default CarniaEvent;