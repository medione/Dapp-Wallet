import React, { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../../layout/Page/Page';
import CommonNftMarket from './CommonNftMarket';
import SubHeader from '../../../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../../components/bootstrap/Modal';
import { TModalFullScreen, TModalSize } from '../../../../../type/modal-type';
import Card, { CardBody } from '../../../../../components/bootstrap/Card';
import NFT from '../image/nft.png'
import Icon from '../../../../../components/icon/Icon';
import useDarkMode from '../../../../../hooks/useDarkMode';

const CommonNft = () => {
	 
	const [ isGridView, setGridView ]  = useState<boolean>(true);
	const [ isViewDay, setViewDay ]  = useState<boolean>(false);
	
	const setPrintButton = (btn:string) => {
		// console.log('DefaultFooter.tsx > setFooterButton > btn')
		// console.log(btn)
		switch (btn) {
			case 'gridview':
				setGridView(true)
				setViewDay(false);
				break;
			case 'viewday':
				setGridView(false)
				setViewDay(true);
				break;
			default:
				return null
		}
	}

	const [state, setState] = useState(false);

	const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);

	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};

	const [longContentStatus, setLongContentStatus] = useState(false);
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);
	// const { darkModeStatus } = useDarkMode();
	const { themeStatus } = useDarkMode();

		return (
		<PageWrapper title='CommonNft'>
			{/* <Page> */}
			<Card stretch>
				<CardBody className='h5'>
					<div className='d-flex justify-content-between mb-5'>
						<Button
							color='light'
							isLight
							tag='a'
							// to='/'
							className='ms-3'
						>
							거래내역 { '>' }
						</Button>
						<div>
							<ButtonGroup>
								<Button
									icon='GridView'
									color={isGridView ? 'primary': 'light'}
									// isLight
									tag='a'
									onClick={() => setPrintButton('gridview')}
								/>
								<Button
									icon='ViewDay'						
									color={isViewDay ? 'primary': 'light'}
									tag='a'
									onClick={() => setPrintButton('viewday')}
									className='me-3'
								/>

							</ButtonGroup>
						</div>			
					</div>							
					<div className='d-flex justify-content-center mt-3'>
						<img src={NFT} style={{width: 60}} alt='NFT' />
					</div>
					<div className='d-flex justify-content-center mt-5'>
						아직 보유한 NFT가 없어요
					</div>
					<div className='d-flex justify-content-center mt-4'>
						<Button
							color='light'
							className='text-primary'
							onClick={() => {
								initialStatus();
								// setFullScreenStatus('xxl');
								setFullScreenStatus(true);								
								setState(true);
							}}
						>
							NFT 마켓 바로 가기
						</Button>
					</div>
					<div className='d-flex justify-content-end mt-5'>
						<Button
							// icon='AcUnit'
							// color='primary'
							// color='light'
							size='lg'
						/>
					</div>
				</CardBody>
			</Card>
				{/* </div>				 */}
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
							NFT 마켓
						</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<CommonNftMarket />
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
		{/* </Page> */}
	</PageWrapper>
	);
};

export default CommonNft;
