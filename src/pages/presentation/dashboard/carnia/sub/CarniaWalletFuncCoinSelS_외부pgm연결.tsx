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
import Input from '../../../../../components/bootstrap/forms/Input'
import { Formik, Field } from "formik";
import { useMemo } from "react";

const data: { id: number; name: string; age: number }[] = [
	{ id: 1, name: "John Doe", age: 30 },
	{ id: 2, name: "Jane Doe", age: 25 },
	{ id: 3, name: "Peter Smith", age: 40 },
];

const CarniaWalletFuncCoinSelS = () => {

	const [searchValue, setSearchValue] = useState("");
	const filteredData = useMemo(() => data.filter((item) => item.name.includes(searchValue)), [searchValue]);

	const handleSearch = (e: { key: any, target: { value: any } }) => {
			if (e.key === "Enter") {
				 setSearchValue(e.target.value);
			}
	};
	
	return (
		<div>
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
			<table>
				<thead>
					<tr>
						<th>이름</th>
						<th>나이</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CarniaWalletFuncCoinSelS;
