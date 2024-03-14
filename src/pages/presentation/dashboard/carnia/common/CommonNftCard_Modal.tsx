import React, { useState } from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../../../components/bootstrap/Breadcrumb';
import Page from '../../../../../layout/Page/Page';
import PageWrapper from '../../../../../layout/PageWrapper/PageWrapper';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../../components/bootstrap/Modal';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../../components/bootstrap/Card';
import Button from '../../../../../components/bootstrap/Button';
import Icon from '../../../../../components/icon/Icon';
import CommonDesc from '../../../../../common/other/CommonDesc';
import CommonHowToUse from '../../../../../common/other/CommonHowToUse';
import CommonStoryBtn from '../../../../../common/other/CommonStoryBtn';
import { componentPagesMenu } from '../../../../../menu';
import { TModalFullScreen, TModalSize } from '../../../../../type/modal-type';

const ModalPage = () => {
	const [state, setState] = useState(false);

	const [staticBackdropStatus, setStaticBackdropStatus] = useState(false);
	const [scrollableStatus, setScrollableStatus] = useState(false);
	const [centeredStatus, setCenteredStatus] = useState(false);
	const [sizeStatus, setSizeStatus] = useState<TModalSize>(null);
	const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);
	const [animationStatus, setAnimationStatus] = useState(true);
	const [longContentStatus, setLongContentStatus] = useState(false);
	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);

	const initialStatus = () => {
		setStaticBackdropStatus(false);
		setScrollableStatus(false);
		setCenteredStatus(false);
		setSizeStatus(null);
		setFullScreenStatus(undefined);
		setAnimationStatus(true);
		setLongContentStatus(false);
		setHeaderCloseStatus(true);
	};

	const CONTENT = longContentStatus ? (
		<>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
			<p>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
				facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros.
			</p>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
				lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
			<p>
				Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
				metus auctor fringilla.
			</p>
		</>
	) : (
		<p>
			Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
			in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
		</p>
	);

	const GENERAL_USAGE = `const [state, setState] = useState(false);`;

	const GENERAL_USAGE_2 = `
<Button 
	onClick={ Function} // Example: () => setState(true)
	{...props}>
	...
</Button>

<Modal 
	id={ String } 
	titleId={ String }
	isOpen={ Boolean } // Example: state
	setIsOpen={ Function } // Example: setState
	isStaticBackdrop={ Boolean } 
	isScrollable={ Boolean } 
	isCentered={ Boolean } 
	size={ String } // 'sm' || 'lg' || 'xl' 
	fullScreen={ Boolean || String } // true || 'sm' || 'md' || 'lg' || 'xl' || 'xxl' 
	isAnimation={ Boolean }>
	<ModalHeader 
		className={ String }
		setIsOpen={ Function} // Example: setState
		>
		<ModalTitle id={ String }>...</ModalTitle>
	</ModalHeader>
	<ModalBody className={ String } {...props}>...</ModalBody>
	<ModalFooter className={ String } {...props}>...</ModalFooter>
</Modal>`;

	return (
		<PageWrapper title={componentPagesMenu.components.subMenu.modal.text}>
			{/* <SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentPagesMenu.components.text,
								to: `/${componentPagesMenu.components.path}`,
							},
							{
								title: componentPagesMenu.components.subMenu.modal.text,
								to: `/${componentPagesMenu.components.subMenu.modal.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/docs/components-modal--default' />
				</SubHeaderRight>
			</SubHeader> */}
			<Page>
				<div className='row'>
					<div className='col-auto'>
						<Button
							className='w-100'
							color='dark'
							isLight
							icon='Send'
							onClick={() => {
								initialStatus();
								setFullScreenStatus('xxl');
								setState(true);
							}}
							>
							Open Modal (fullScreen is xxl)
						</Button>
					</div>
				</div>

				<Modal
					isOpen={state}
					setIsOpen={setState}
					titleId='exampleModalLabel'
					isStaticBackdrop={staticBackdropStatus}
					isScrollable={scrollableStatus}
					isCentered={centeredStatus}
					size={sizeStatus}
					fullScreen={fullScreenStatus}
					isAnimation={animationStatus}>
					<ModalHeader setIsOpen={headerCloseStatus ? setState : undefined}>
						<ModalTitle id='exampleModalLabel'>Modal title</ModalTitle>
					</ModalHeader>
					<ModalBody>{CONTENT}</ModalBody>
					<ModalFooter>
						<Button
							color='info'
							isOutline
							className='border-0'
							onClick={() => setState(false)}>
							Close
						</Button>
						<Button color='info' icon='Save'>
							Save changes
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default ModalPage;
