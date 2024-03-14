import React, { useState } from 'react';
import { useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../../../../menu';
import Page from '../../../../../layout/Page/Page';
import validate from '../helper/editPagesValidate';
import showNotification from '../../../../../components/extras/showNotification';
import Icon from '../../../../../components/icon/Icon';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../../components/bootstrap/Dropdown';
import useDarkMode from '../../../../../hooks/useDarkMode';
import Spinner from '../../../../../components/bootstrap/Spinner';
import FormGroup from '../../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../../components/bootstrap/forms/Input';
import Breadcrumb from '../../../../../components/bootstrap/Breadcrumb';
import Avatar from '../../../../../components/Avatar';
import USERS from '../../../../../common/data/userDummyData';
import CommonDesc from '../../../../../common/other/CommonDesc';
import Label from '../../../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../../../components/bootstrap/forms/Checks';
import classNames from 'classnames';


const CommonSingleChain = () => {
	// const { themeStatus } = useDarkMode();
	const { darkModeStatus } = useDarkMode();	
	
	/**
	 * Common
	 */
	const [lastSave, setLastSave] = useState<Dayjs | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleSave = () => {
		setLastSave(dayjs());
		setIsLoading(false);
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon='Info' size='lg' className='me-1' />
				<span>Updated Successfully</span>
			</span>,
			"The user's account details have been successfully updated.",
		);
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			displayName: '',
			emailAddress: '',
			phone: '',
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
			checkOne: true,
			checkTwo: false,
			checkThree: true,
		},
		validate,
		onSubmit: () => {
			setIsLoading(true);
			setTimeout(handleSave, 2000);
		},
	});

	const [passwordChangeCTA, setPasswordChangeCTA] = useState<boolean>(false);

	return (
		// <div className='row align-content-start'>
		// 	<div className='col-md-12'>
		<PageWrapper>
			<Page>
				<Card>
					<CardHeader>
						<CardLabel 
								icon='AddToDrive' 
								iconColor={darkModeStatus ? 'light' : 'dark'}
						>
						</CardLabel>
					</CardHeader>
					<CardBody>
							<div className='container'>
								<div className='d-flex flex-column justify-content-start'>
									<div className='d-flex flex-row justify-content-between'>
										<div>
											보낼 코인
										</div>
										<div>
											💰보유량:0 최대입력
										</div>
									</div>
									<div>
										<div className='d-flex flex-row justify-content-between align-items-center mr-12'>
											<div>
												<Button
													icon='AutoGraph'
													size='lg'
												>코인선택
												<Icon 
													icon='KeyboardArrowDown'
													size='lg'
												/>
												</Button>
											</div>
											<div className='p-2'>
												0
											</div>
										</div>
									</div>
									<div className='d-flex justify-content-center my-3'>
										<div className='d-flex flex-column'
												 style={{width:250}}
										>
											<div>&nbsp;</div>
											<hr
												// className='border-top bg-danger'
											/>
											<div>&nbsp;</div>
										</div>
										<CardLabel
											icon='PublishedWithChanges'
											iconColor={darkModeStatus ? 'light' : 'dark'}												
											className='mx-4 d-flex justify-content-start'
										>
											<div></div>
										</CardLabel>
										<div className='d-flex flex-column'
												 style={{width:250}}
										>
											<div>&nbsp;</div>
											<hr/>
											<div>&nbsp;</div>
										</div>
									</div>
									<div className='d-flex flex-row justify-content-between'>
										<div>
											받을 코인
										</div>
										<div>
											💰보유량:0 최대입력
										</div>
									</div>
									<div>
										<div className='d-flex flex-row justify-content-between align-items-center mr-12'>
											<div>
												<Button
													icon='AutoGraph'
													size='lg'
												>코인선택												
												<Icon 
													icon='KeyboardArrowDown'
													size='lg'
												/>
												</Button>
											</div>
											<div className='p-2'>
												0
											</div>
										</div>
									</div>
								</div>
							</div>
							<p/>
							{/* <div className='d-flex justify-content-between mt-5 bg-light'> */}
							<div 
									className={classNames('d-flex justify-content-between mt-5 bg-light text-dark'
									)}
							>
								<div>
									가격변동 허용치
								</div>
								<div>
									2.0%
								</div>
							</div>
							<div>
								<Button  className='w-100'>싱글체인 스왑 실행</Button>
							</div>
							
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default CommonSingleChain;
