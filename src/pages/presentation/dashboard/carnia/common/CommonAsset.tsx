import React, { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../../../../menu';
import Page from '../../../../../layout/Page/Page';
import showNotification from '../../../../../components/extras/showNotification';
import Icon from '../../../../../components/icon/Icon';
import useDarkMode from '../../../../../hooks/useDarkMode';
import CarniaWalletFuncs from './../sub/CarniaWalletFuncs';
import CarniaWalletCoins from './../sub/CarniaWalletCoins';
import CarniaWalletStaking from './../sub/CarniaWalletStaking';

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
		<div className='row'>				
			<div className='col-12'>
						<CarniaWalletFuncs />
			</div>
			<div className='col-12'>
						<CarniaWalletCoins />
			</div>
			<div className='col-12'>
						<CarniaWalletStaking />
			</div>
		</div>
	);
};

export default CommonFriend;
