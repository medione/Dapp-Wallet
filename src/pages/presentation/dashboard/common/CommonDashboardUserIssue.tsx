import React, { useState } from 'react';
import { Calendar as DatePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';

import dayjs from 'dayjs';
import { useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../../components/bootstrap/Modal';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Todo, { ITodoListItem } from '../../../../components/extras/Todo';
import Label from '../../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import Badge from '../../../../components/bootstrap/Badge';
import Progress from '../../../../components/bootstrap/Progress';
import { TColor } from '../../../../type/color-type';

const CommonDashboardUserIssue = () => {
	// const TODO_BADGES: {
	// 	[key: string]: {
	// 		text: string;
	// 		color?: TColor;
	// 	};
	// } = {
	// 	NEW: { text: 'New', color: 'success' },
	// 	UPDATE: { text: 'Update', color: 'info' },
	// 	TEST: { text: 'Test', color: 'warning' },
	// 	REPORT: { text: 'Report', color: 'info' },
	// 	PRINT: { text: 'Print', color: 'danger' },
	// 	CONTROL: { text: 'Control', color: 'primary' },
	// 	MEETING: { text: 'Meeting', color: 'secondary' },
	// };
	const TODO_BADGES: {
		[key: string]: {
			text: string;
			color?: TColor;
		};
	} = {
		NEW: { text: '신규', color: 'success' },
		UPDATE: { text: '수정', color: 'info' },
		TEST: { text: '테스트', color: 'warning' },
		REPORT: { text: '레포트', color: 'info' },
		PRINT: { text: '출력', color: 'danger' },
		CONTROL: { text: '콘트롤', color: 'primary' },
		MEETING: { text: '미팅', color: 'secondary' },
	};	
	const getBadgeWithText = (text: string): string => {
		return TODO_BADGES[
			// @ts-ignore
			Object.keys(TODO_BADGES).filter((key) => TODO_BADGES[key].text === text)
		];
	};

	/**
	 * To/Do List
	 */
	const [list, setList] = useState<ITodoListItem[]>([
		{
			id: 1,
			status: true,
			title: '새 제품이 추가될 예정입니다.',
			date: dayjs().add(0.5, 'day'),
			badge: TODO_BADGES.NEW,
		},
		{
			id: 2,
			status: true,
			title: '커버 이미지가 편집될 것입니다.',
			date: dayjs().add(2, 'day'),
			badge: TODO_BADGES.UPDATE,
		},
		{
			id: 3,
			status: false,
			title: 'A/B 테스트를 준비 중입니다.',
			date: dayjs().add(2, 'day'),
			badge: TODO_BADGES.TEST,
		},
		{
			id: 4,
			status: false,
			title: 'Google Analytics 데이터를 조사할 것입니다.',
			date: dayjs().add(4, 'day'),
			badge: TODO_BADGES.REPORT,
		},
		{
			id: 5,
			status: false,
			title: '송장이 발행될 것입니다.',
			date: dayjs().add(9, 'day'),
			badge: TODO_BADGES.PRINT,
		},
		{
			id: 6,
			status: false,
			title: '의존성을 확인하고 업데이트합니다.',
			date: dayjs().add(15, 'day'),
			badge: TODO_BADGES.CONTROL,
		},
		{
			id: 7,
			status: false,
			title: '마지막 달 회의',
			date: dayjs().add(32, 'day'),
			badge: TODO_BADGES.MEETING,
		},
	]);
	const listLength = list.length;
	const completeTaskLength = list.filter((i) => i.status).length;

	/**
	 * Add New Modal Status
	 */
	const [modalStatus, setModalStatus] = useState(false);

	/**
	 * Ann New To/Do func
	 * @param title
	 * @param date
	 * @param badge
	 */
	const addTodo = (title: string, date: dayjs.ConfigType, badge: any) => {
		const newTodos: {
			id?: string | number;
			status?: boolean;
			title?: string | number;
			date?: dayjs.ConfigType;
			badge?: {
				text?: string;
				color?: TColor;
			};
		}[] = [{ title, date, badge }, ...list];
		setList(newTodos);
	};

	/**
	 * New To/Do Day
	 */
	const [date, setDate] = useState(new Date());

	const validate = (values: { todoTitle: string; todoBadges: string }) => {
		const errors: { todoTitle: string } = {
			todoTitle: '',
		};
		if (!values.todoTitle) {
			errors.todoTitle = '필수 입력 항목';
		} else if (values.todoTitle.length > 40) {
			errors.todoTitle = 'Must be 40 characters or less';
		}

		return errors;
	};
	const formik = useFormik({
		initialValues: {
			todoTitle: '',
			todoBadges: '',
		},
		validate,
		onSubmit: (values, { resetForm }) => {
			addTodo(values.todoTitle, date, getBadgeWithText(values.todoBadges));
			setModalStatus(false);
			resetForm({
				values: {
					todoTitle: '',
					todoBadges: '',
				},
			});
		},
	});

	return (
		<Card stretch>
			<CardHeader>
				<CardLabel icon='AssignmentTurnedIn' iconColor='danger'>
					<CardTitle tag='div' className='h5'>
						박민지 이슈사항
					</CardTitle>
					<CardSubTitle tag='div'>
						<Progress
							height={8}
							max={listLength}
							value={completeTaskLength}
							color={completeTaskLength === listLength ? 'success' : 'primary'}
						/>
					</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='info'
						icon='Add'
						isLight
						onClick={() => setModalStatus(!modalStatus)}>
						신규
					</Button>
					<Modal setIsOpen={setModalStatus} isOpen={modalStatus} titleId='new-todo-modal'>
						<ModalHeader setIsOpen={setModalStatus}>
							<ModalTitle id='new-todo-modal'>신규 이슈사항</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<form className='row g-3' onSubmit={formik.handleSubmit}>
								<div className='col-12'>
									<FormGroup id='todoTitle' label='제목'>
										<Input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											isTouched={formik.touched.todoTitle}
											invalidFeedback={formik.errors.todoTitle}
											validFeedback='좋습니다!'
											value={formik.values.todoTitle}
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<div>
										{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
										<Label>만료일</Label>
									</div>
									<div className='text-center mt-n4'>
										<DatePicker
										  locale={ko}
											onChange={(item) => setDate(item)}
											date={date}
											minDate={new Date()}
											// dateDisplayFormat={'yyyy.mm.dd'}
											color={import.meta.env.VITE_PRIMARY_COLOR}
										/>
									</div>
								</div>
								<div className='col-12'>
									<FormGroup>
										<Label htmlFor='todoBadges'>뱃지</Label>
										<ChecksGroup isInline>
											{Object.keys(TODO_BADGES).map((i) => (
												<Checks
													key={TODO_BADGES[i].text}
													type='radio'
													name='todoBadges'
													id={TODO_BADGES[i].text}
													label={
														<Badge isLight color={TODO_BADGES[i].color}>
															{TODO_BADGES[i].text}
														</Badge>
													}
													value={TODO_BADGES[i].text}
													onChange={formik.handleChange}
													checked={formik.values.todoBadges}
												/>
											))}
										</ChecksGroup>
									</FormGroup>
								</div>
								<div className='col' />
								<div className='col-auto'>
									<Button
										type='submit'
										color='info'
										isLight
										isDisable={!formik.isValid && !!formik.submitCount}>
										추가 항목
									</Button>
								</div>
							</form>
						</ModalBody>
					</Modal>
				</CardActions>
			</CardHeader>
			<CardBody isScrollable>
				<Todo list={list} setList={setList} />
			</CardBody>
		</Card>
	);
};

export default CommonDashboardUserIssue;
