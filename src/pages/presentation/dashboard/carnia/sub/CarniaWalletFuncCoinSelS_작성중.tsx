import React, { FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import coinData from '../data/dummyNDCoinData';
import { getFirstLetter, priceFormat } from '../../../../../helpers/helpers';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { carniaPagesMenu, dashboardPagesMenu, demoPagesMenu } from '../../../../../menu';
import { right } from '@popperjs/core';
import Icon from '../../../../../components/icon/Icon';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
// import Search from '../image/search.png'
import Formik, { useFormik } from 'formik';
import Input from '../../../../../components/bootstrap/forms/Input'

const CarniaWalletFuncCoinSelS = () => {
	const refSearchInput = useRef<HTMLInputElement>(null);
	const [ searchValue, setSearchValue ] = useState("")

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
    }
  };

	useEffect(() => {
		// if (formik.values.searchInput) {
		// 	// setSearchModalStatus(true);
		// 	refSearchInput?.current?.focus();
		// }
		return () => {
			// setSearchModalStatus(false);
		};
	}, [searchValue]);

	return (
		<>
			<PageWrapper title='CarniaWalletFuncCoinSelS'>
				<Card stretch>
					{/* <CardHeader className='d-flex flex-row'> */}
					{/* <CardHeader> */}
						<CardActions>
							<div className='d-flex justify-content-between align-items-center my-3'>
								<div className='col-4'>
									<Button
										// color='primary'
										isLink
										icon='ArrowBackIosNew'
										size='lg'
										// icon='Summarize'
										tag='a'
										// href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
										to="/wallet"
										/>		
								</div>
								<div className='col-4 d-flex justify-content-center h3'>
									코인 선택
								</div>
								<div className='col-4 d-flex justify-content-end'>
									<div className='me-4'>
										{/* 코인 정보 */}
									</div>
								</div>
							</div>
						</CardActions>


						<div className='d-flex' data-tour='search'>
							{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
							<label className='border-0 bg-transparent cursor-pointer'>
								<Icon icon='Search' size='2x' color='primary' />
							</label>

							<Input
								ref={refSearchInput}
								id='searchInput'
								type='search'
								className='border-0 shadow-none bg-transparent'
								placeholder='코인 이름 검색'
								onChange={formik.handleChange}
								value={formik.values.searchInput}
								autoComplete='off'
							/>


							<Formik
											initialValues={{ search: "" }}
											onSubmit={(values) => {
												setSearchValue(values.search);
											}}
										>
											{({ values }) => (
												<form>
													<Field
														type="text"
														name="search"
														placeholder="검색어 입력"
														onKeyPress={handleSearch}
													/>
												</form>
											)}
										</Formik>							
						</div>


					<CardBody isScrollable>
						<div className='row g-3'>
							{coinData.map((i) => (
								// eslint-disable-next-line react/jsx-props-no-spreading
								<CoinDataItem key={i.id} {...i} />
							))}
						</div>
					</CardBody>
				</Card>
				{/* <CardTabItem 
						id="tab-1"
						title='전일대비'
						>
						</CardTabItem>
						<CardTabItem 
							id="tab-2"
							title='최근 일주일'
						>
					</CardTabItem> */}
			</PageWrapper>
		</>
	);
};

export default CarniaWalletFuncCoinSelS;
