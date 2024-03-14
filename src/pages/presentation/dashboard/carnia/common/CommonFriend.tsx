import React, { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
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

const CommonFriend = () => {
	const { themeStatus } = useDarkMode();

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

	const [passwordChangeCTA, setPasswordChangeCTA] = useState<boolean>(false);

	const formik = useFormik({
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			return undefined;
		},
		initialValues: {
			sendCrypt: '',
		},
	});
	return (
		<PageWrapper title={demoPagesMenu.editPages.subMenu.editModern.text}>
			<Page>
				<div className='row h-100 align-content-start'>
					<div className='col-md-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Person' iconColor='primary'>
									{/* <CardTitle tag='div' className='h5'> */}
										{/* Personal Information */}
									{/* </CardTitle> */}
									{/* <CardSubTitle tag='div' className='h6'>
										User's credentials
									</CardSubTitle> */}
									&nbsp;
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='d-flex'>
								<div className='col-6 h5 me-5'>
									누구에게 보낼까요?
								</div>
								<div className='d-flex col-6 justify-content-end mb-4'>
									<div></div>
									<div className='me-1'>
										<Button
											color='primary'
											className='me-5'
										>
											친구선택
										</Button>
									</div>
								</div>
							</div>
							<FormGroup 
								id='sendCrypt' 
								label='얼마나 보낼까요?'
								className='h5'
							>
								<Input
									placeholder='0'
									type='number'
									// autoComplete='family-name'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.sendCrypt}
									isValid={formik.isValid}
									isTouched={formik.touched.sendCrypt}
									invalidFeedback={formik.errors.sendCrypt}
									// validFeedback='Looks good!'
								/>
								</FormGroup>
								<div className='mt-2'>&nbsp;</div>
								<div className='d-flex justify-content-center my-5'>
									<Button
										icon='Info'
										color='light'
									>
										안전한 송금을 위해 받는 분의 송금 수락이 필요해요.
									</Button>
							 </div>
							 <div className='mt-3'>&nbsp;</div>							 
							</CardBody>
						</Card>

					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CommonFriend;
