import React, { useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
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

// type TListTab = '자산' | 'NFT';

const CarniaSettings = () => {

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
		<PageWrapper title={'CarniaSettings'}>
			<Page container='fluid'>
				<div className='d-flex justify-content-between mb-5'>
					<div>
						<Button
								icon='ArrowBackIosNew'
								color={!darkModeStatus ? 'dark' : 'light'}
								isLink
								tag='a'
								// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
								// href='/'							
								to="/"
						/>		
					</div>				
					<div className='d-flex align-items-center pt-1 h5 me-5'>
						<strong>설정</strong>
					</div>
					<div className='d-flex bg-primary' />
				</div>

				{/* 계정 */}
				<div
						className='h4 ms-4'
				>
					<strong>계정</strong>
				</div>

				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>프로필 관리</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>지갑 관리</div>
							<div>
								<strong className='fs-5 text-primary'>호야지갑</strong>
								<Button 
									icon='ArrowForwardIos'
									isLink
									className='h1'
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>Wallet Connect</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>												
					</CardBody>
				</Card>

				{/* 환경설정 */}
				<div
						className='h4 ms-4'
				>
					<strong>환경설정</strong>
				</div>				
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>인증 및 보안</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>화페</div>
							<div>
								<strong className='fs-5 text-primary'>KRW</strong>
								<Button 
									icon='ArrowForwardIos'
									isLink
									className='h1'
								/>
							</div>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='h5'>언어</div>
							<div>
								<strong className='fs-5 text-primary'>한국어</strong>
								<Button 
									icon='ArrowForwardIos'
									isLink
									className='h1'
								/>
							</div>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='h5'>화면 모드</div>
							<div>
								<strong className='fs-5 text-primary'>라이트 모드</strong>
								<Button 
									icon='ArrowForwardIos'
									isLink
									className='h1'
								/>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* 뉴스름 */}
				<div
						className='h4 ms-4'
				>
					<strong>뉴스룸</strong>
				</div>				
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>Carnia News</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>이벤트</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>공지사항</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* 서비스 가이드 */}
				<div
						className='h4 ms-4'
				>
					<strong>서비스 가이드</strong>
				</div>				
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>서비스 메뉴얼</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>Web3.0 안전 가이드</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* 고객 센터 */}
				<div
						className='h4 ms-4'
				>
					<strong>고객센터</strong>
				</div>				
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>자주 묻는 질문</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>

						<div className='d-flex justify-content-between'>
							<div className='h5'>문의하기</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* 앱 관리 */}
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='h5'>앱 관리</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* 회원 탈퇴 */}
				<Card>
					<CardBody>
						<div className='d-flex justify-content-between'>
							<div className='text-danger h5'>회원 탈퇴</div>
							<div className='h1'>
								<Button 
									icon='ArrowForwardIos'
									isLink
								/>
							</div>
						</div>
					</CardBody>
				</Card>

			</Page>
		</PageWrapper>
	);
};

export default CarniaSettings;
