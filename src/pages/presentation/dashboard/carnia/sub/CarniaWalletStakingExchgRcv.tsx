import Icon from '../../../../../components/icon/Icon';
import Button from '../../../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
} from '../../../../../components/bootstrap/Card';
import Barcode from '../image/2barcode.png'
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import showNotification from '../../../../../components/extras/showNotification';

const CarniaWalletStakingExchgRcv = () => {
  return (
		<PageWrapper title='CarniaWalletStakingExchgRcv'>
			<Card>
				<CardActions>
					{/* <div>
						<Button
							color='primary'
							isLink
							tag='a'
							to="/stakingdet"
							className='me-1 mt-1'
						>		
							<h1>{'<'}</h1>
						</Button>
					</div>
					<div className='mt-3 me-5'>
						Casper 받기
					</div>
					<div className='ms-5 my-5'>
						&nbsp;
					</div> */}
					<div className='d-flex justify-content-between align-items-center my-4'>
						<div className='col-4'>
							<Button
								// color='primary'
								isLink
								icon='ArrowBackIosNew'
								size='lg'
								// icon='Summarize'
								tag='a'
								// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
								to="/stakingdet"
								/>		
						</div>
						<div className='col-4 d-flex justify-content-center h3'>
							Casper 받기
						</div>
						<div className='col-4 d-flex justify-content-end'>
							<div className='me-4'>
								{/* 코인 정보 */}
							</div>
						</div>
					</div>					
				</CardActions>
				<div className='d-flex justify-content-center h4 mt-4 me-3'>
					Casper 수신 주소
				</div>		
				{/* <CardHeader>
				</CardHeader> */}
				<CardBody className='d-flex justify-content-center'>
					<div>
						<div>
							<img src={Barcode} style={{width: 250}} alt='이미지' />
						</div>
						<div>
							<pre>
								bc1q63j987234567890abcdefghijklmnopqrstuvwxyz<br/><br/><br/><br/>
								이 주소에는 Bitcoin만 전송해 주세요.<br/>
								<div className='text-danger h56'>
									다른 코인 전송시 영구적인 손실이 발생해요.
								</div>
							</pre>
						</div>									
						<div className='d-flex justify-content-center me-4'>
							<div className='d-flex justify-content-center col-3 mb-4'>
								<div className='d-flex flex-column'>
									<Button
										// color='light'
										color="info"
										icon='FileCopy'
										rounded='circle'
										// isLight
										tag='a'
										// to='/funccoinsels'
										size='lg'
										onClick={() => showNotification(
											'복사', // String, HTML or Component
											'클립보드에 복사되었어요', // String, HTML or Component
											'info' // 'default' || 'info' || 'warning' || 'success' || 'danger',
										)}												
										>
									</Button>
									<span className='text-center mt-2'>복사</span>
								</div>
							</div>
							<div className='d-flex justify-content-center col-3'>
								<div className='d-flex flex-column'>
									<Button
										color="info"
										icon='Share'
										rounded='circle'

										tag='a'
										// to='/funccoinselr'
										size='lg'
										// onClick={() => alert('개발중입니다.')}																		
									>
									</Button>								
									<span className='text-center mt-2'>받기</span>										
								</div>
							</div>
						</div>
					</div>
			</CardBody>
		</Card>
	</PageWrapper>				
)};

export default CarniaWalletStakingExchgRcv;