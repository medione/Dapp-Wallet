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

const CommonAddr = () => {
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

	const formik = useFormik({
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			return undefined;
		},		
		initialValues: {
			sendCrypt: '',
			addr:'',
		},
	});

	const [passwordChangeCTA, setPasswordChangeCTA] = useState<boolean>(false);

	return (
		<PageWrapper title='CommonAddr'>
			<Page>
				<div className='row h-100 align-content-start'>
					<div className='col-md-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='HomeWork' iconColor='primary'>
									{/* <CardTitle tag='div' className='h5'> */}
										{/* Personal Information */}
									{/* </CardTitle> */}
									{/* <CardSubTitle tag='div' className='h6'>
										User's credentials
									</CardSuaaabTitle> */}
									&nbsp;
								</CardLabel>
							</CardHeader>
							<CardBody className='h5'>
								<div className='row g-4'>
									<div className='col-md-12'>
										<FormGroup 
											id='addr'
											label='어느 주소로 보낼까요?'
											className='h5'
										>
											<Input
												type='text'
												// autoComplete='family-name'
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.addr}
												isValid={formik.isValid}
												isTouched={formik.touched.addr}
												invalidFeedback={formik.errors.addr}
												placeholder='지갑주소'														
												// validFeedback='Looks good!'
											/>
										</FormGroup>
										<div className='my-3'>		 
											<Button
												color='primary'
												icon='AdUnits'
												size='sm'
											>
												붙여넣기
											</Button>
										</div>
									</div>
									<div className='mb-5'>
										<FormGroup id='sendCrypt' label='얼마나 보낼까요?'>
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
									</div>
								</div>
							</CardBody>
						</Card>

					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CommonAddr;
