import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTabItem,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import NFT from './image/nft.png'
import { TModalFullScreen, TModalSize } from '../../../../type/modal-type';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import CommonNftMarket from './common/CommonNftMarket';
import Profile from './image/profile.jpg'
import useDarkMode from '../../../../hooks/useDarkMode';
import classNames from 'classnames';

// type TListTab = '자산' | 'NFT';

const CarniaProfile = () => {

	const [state, setState] = useState(false);
	const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);

	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	return (
		<PageWrapper title={'CarniaProfile'}>
			<Page container='fluid'>
				<div className='text-white'
						style={{backgroundColor:'#aaaaaa'}}
				>
					<div className='d-flex justify-content-between'
					>
						<div className='bg-primary1'>
							<Button
									color='primary'
									isLink
									// icon='Summarize'
									tag='a'
									// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
									// href='/'							
									to="/"
									className='text-dark'
									>		
									<h1 className='text-white'>{'X'}</h1>
							</Button>
						</div>
						<div className='d-flex align-items-center h4 mt-2 me-5 bg-success1'>
							<strong>호야</strong>
						</div>
						<div className='me-3'/>
					</div>
					<div className='d-flex flex-column bg-danger1'
							style={{height:300}}
					>
						<div className='d-flex justify-content-center mt-5 me-2'>
							<img 
								src={Profile}
								className='rounded-3'
								style={{width: 100}} 
								alt='이미지' 
								/>
						</div>
						<div className='d-flex justify-content-center my-3 me-2'>
							프로필을 NFT로 꾸며 보세요!
						</div>
						<div className='d-flex justify-content-center h4 my-2 me-2'>
							프로필 편집 {'>'}
						</div>
						<div className='d-flex justify-content-center my-2 me-2'>
							<span 
								className='border-0 rounded-pill p-1'
								style={{backgroundColor:'#cccccc'}}
							>수익률 -
						</span>
						</div>										
					</div>
				</div>
				<Card 
					hasTab
					tabButtonColor='light'
					// tabBodyClassName='bg-light'
					shadow='none'
					// isCompact
				>
					<CardTabItem
							id="nft"
							title="NFT"
					>
						<div 
								className='bg-light text-dark' 
								style={{height:350}}
						>
							<div className='d-flex mb-5'/>
							<div className='d-flex my-5'/>
							<div className='d-flex my-5'/>														
							<div className='d-flex my-5'/>																				
							<div className='d-flex justify-content-center h5 mt-5'>
								아직 보유한 NFT가 없어요
							</div>
							<div className='d-flex justify-content-center my-4'>
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
						</div>
					</CardTabItem>
					<CardTabItem
						id="portfolio"
						title="포트폴리오"
					>
						<div className='bg-light text-dark' style={{height:350}}>
							<div className='d-flex mb-5'/>
							<div className='d-flex my-5'/>
							<div className='d-flex my-5'/>														
							<div className='d-flex my-5'/>							
							<div className='d-flex justify-content-center h5 mt-5'>
								아직 보유한 자산이 없어요
							</div>
						</div>
					</CardTabItem>						
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
			</Page>
		</PageWrapper>
	);
};

export default CarniaProfile;
