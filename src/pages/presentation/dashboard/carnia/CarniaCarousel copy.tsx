import React, { useState } from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { useMeasure } from 'react-use';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/bootstrap/Button';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Card from '../../../../components/bootstrap/Card';
import showNotification from '../../../../components/extras/showNotification';
import Icon from '../../../../components/icon/Icon';
import Pic from '../../../../assets/img/wanna/richie/richie.png';
import Pic2 from '../../../../assets/img/wanna/richie/richie2.png';
import Pic3 from '../../../../assets/img/wanna/richie/richie3.png';
import Pic4 from '../../../../assets/img/wanna/richie/richie4.png';
import Pic5 from '../../../../assets/img/wanna/richie/richie5.png';
import Pic6 from '../../../../assets/img/wanna/richie/richie6.png';
import Pic7 from '../../../../assets/img/wanna/richie/richie7.png';
import Pic8 from '../../../../assets/img/wanna/richie/richie8.png';
import { demoPagesMenu } from '../../../../menu';
import C_img1 from '../carnia/image/carousel_adf.png';
import C_img2 from '../carnia/image/carousel_adf1.jpg';
import C_img3 from '../carnia/image/carousel_fnsa.png';
import C_img4 from '../carnia/image/carousel_nfp.jpg';
import Carousel from '../../../../components/bootstrap/Carousel';
import useDarkMode from '../../../../hooks/useDarkMode';
import CarouselSlide from '../../../../components/bootstrap/CarouselSlide';
import { Link } from 'react-router-dom';
import { pointer } from '@testing-library/user-event/dist/types/pointer';

const CarniaCarousel = () => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			formPrefix: 'Prof.',
			formName: 'Timothy',
			formMiddleName: 'John',
			formSurName: 'Doe',
			formEmailAddress: 'tjohndoe@site.com',
			formPhone: '2575637401',
			formAddressLine: '711-2880 Nulla St.',
			formAddressLine2: 'Mankato',
			formCity: 'Mississippi',
			formState: 'USA',
			formZIP: '96522',
			formCurrentPassword: '',
			formNewPassword: '',
			formConfirmNewPassword: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-console
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Information</span>
				</span>,
				JSON.stringify(values, null, 2),
			);
		},
	});
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	return (

					<Carousel
						isHoverPause
						isRide
						// height={height || 305}
						// height={80}					
						height={80}
						interval='5000'
						isDark={darkModeStatus}
						rounded={0}
						>
						<div 
								className={classNames('mb-0', {
									'bg-lo10-info': darkModeStatus,
									'bg-l25-info': !darkModeStatus,
								})}
								onClick={() => {
									location.href=`${import.meta.env.VITE_LOOKSRARE_URL}`
								}}
								style={{cursor: 'pointer'}}				
						>
							<CarouselSlide>
								<img 
									src={C_img1} 
									height="85" 
									width='600'
									className='d-flex align-items-center'
									onClick={() => location.href=`${import.meta.env.VITE_LOOKSRARE_URL}`}
								/>
							</CarouselSlide>
							<CarouselSlide>
								<div className='d-flex justify-content-center'>
									<img 
											src={C_img2} 
											height="80" 
											width='550' 
											className='d-flex align-items-center'				
									/>
								</div>									
							</CarouselSlide>
							<CarouselSlide>
									<img 
											src={C_img3} 
											height="80" 
											width='550' 
											className='d-flex align-items-center'											
									/>
							</CarouselSlide>
						</div>
					</Carousel>
					{/* <CarouselSlide background={C_img2} />											 */}
						{/* <CarouselSlide>
							<div className='row align-items-center h-100'>
								<div
									className='col-6 carousel-slide-bg'
									style={{ backgroundImage: `url(${C_img1})` }}
								/>
								<div className='col-6'>
									<h2>New Products</h2>
									<p className='lead'>New products ready for sale.</p>
									<Button
										color={darkModeStatus ? 'light' : 'dark'}
										onClick={() =>
											navigate(
												`../${demoPagesMenu.sales.subMenu.productsGrid.path}`,
											)
										}>
										Click
									</Button>
								</div>
							</div>
						</CarouselSlide>
						<CarouselSlide background={C_img2} />

						<CarouselSlide>
							<div className='row align-items-center h-100'>
								<div className='col-6 text-end'>
									<h2>Customize</h2>
									<h5>You can design your own screens</h5>
									<Button
										color={darkModeStatus ? 'light' : 'dark'}
										onClick={() =>
											navigate(
												`../${demoPagesMenu.sales.subMenu.dashboard.path}`,
											)
										}>
										Click
									</Button>
								</div>
								<div
									className='col-6 carousel-slide-bg'
									style={{ backgroundImage: `url(${C_img3})` }}
								/>
							</div>
						</CarouselSlide>
						<CarouselSlide background={C_img4} /> */}
					{/* </Carousel> */}
						{/* </Card> */}
				// </div>
	);
};

export default CarniaCarousel;
