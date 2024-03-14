import React, { useState } from 'react';
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
import NFT from '../image/nft.png'
import { TModalFullScreen, TModalSize } from '../../../../../type/modal-type';

// type TListTab = '자산' | 'NFT';

const CommonNftCard = () => {

	const [state, setState] = useState(false);

	const [fullScreenStatus, setFullScreenStatus] = useState<TModalFullScreen | undefined>(
		undefined,
	);

	const initialStatus = () => {
		setFullScreenStatus(undefined);
	};


	return (
	<div className='col-xxl-12'>
		<Card>
			<CardBody className='h5'>
				<div className='d-flex justify-content-center mt-3'>
					<img src={NFT} style={{width: 60}} alt='NFT' />
				</div>
				<div className='d-flex justify-content-center mt-5'>
					아직 보유한 NFT가 없어요
				</div>
				<div className='d-flex justify-content-center mt-4'>
					<Button
						color='light'
						className='text-primary'
						onClick={() => {
							initialStatus();
							// setFullScreenStatus('xxl');
							setFullScreenStatus(true);							
							setState(true);
						}}
					>
						NFT 마켓 바로 가기
					</Button>
				</div>
				<div className='d-flex justify-content-end mt-5'>
					<Button
						icon='AcUnit'
						color='primary'
						// color='light'
						size='lg'
					/>
				</div>									
			</CardBody>
		</Card>
	</div>
	);
};

export default CommonNftCard;
