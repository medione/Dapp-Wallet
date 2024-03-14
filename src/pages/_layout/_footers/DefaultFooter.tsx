import React, {useState} from 'react';
import classNames from 'classnames';
import useDarkMode from '../../../hooks/useDarkMode';
import Footer from '../../../layout/Footer/Footer';
import Button from '../../../components/bootstrap/Button';
import { carniaPagesMenu } from '../../../menu';

const DefaultFooter = () => {
	const { darkModeStatus } = useDarkMode();

	const [ isHome, setHome ]  = useState<boolean>(false);
	const [ isWallet, setWallet ]  = useState<boolean>(false);
	const [ isSwap, setSwap ]  = useState<boolean>(false);
	const [ isDapp, setDapp ]  = useState<boolean>(false);	
	const [ isPeople, setPeople ]  = useState<boolean>(false);	

	const setFooterButton = (btn:string) => {
		// console.log('DefaultFooter.tsx > setFooterButton > btn')
		// console.log(btn)
		switch (btn) {
			case 'home':
				setHome(true)
				setWallet(false);
				setSwap(false);
				setDapp(false);
				setPeople(false);
				break;
			case 'wallet':
				setHome(false)
				setWallet(true);
				setSwap(false);
				setDapp(false);
				setPeople(false);
				break;
			case 'swap':
				setHome(false)
				setWallet(false);
				setSwap(true);
				setDapp(false);
				setPeople(false);				
				break;
			case 'dApp':
				setHome(false)
				setWallet(false);
				setSwap(false);
				setDapp(true);
				setPeople(false);
				break;				
			case 'people':
				setHome(false)
				setWallet(false);
				setSwap(false);
				setDapp(false);
				setPeople(true);
				break;				
			default:
				return null
		}
		// alert('개발중입니다.');
	}

	return (
		<Footer>
			<div className='container d-flex  justify-content-between'>
				<div className='col-2'>
					<div className='d-flex flex-column'>					
						<Button
							icon='Home'
							isLight
							hoverShadow="lg"
							color={isHome ? 'primary': undefined}
							tag='a'
							to='/'
							size='lg'
							onClick={() => setFooterButton('home')}
							>
						</Button>
						<span className='ms-3'>홈</span>
					</div>							
				</div>
				<div className='col-2'>
					<div className='d-flex flex-column'>						
						<Button
							icon='AccountBalanceWallet'
							isLight
							hoverShadow="lg"							
							color={isWallet ? 'primary': undefined}
							tag='a'
							to='/wallet'
							size='lg'
							onClick={() => setFooterButton('wallet')}
							>
						</Button>
						<span className='ms-2'>지갑</span>
					</div>							
				</div>
				<div className='col-2'>
					<div className='d-flex flex-column'>
						<Button
							icon='SwapHoriz'
							isLight
							hoverShadow="lg"							
							color={isSwap ? 'secondary': undefined}
							tag='a'
							to={`../${carniaPagesMenu.carniaSubTopCoin.path}`}
							size='lg'
							onClick={() => setFooterButton('swap')}
							>
						</Button>
						<span className='ms-2'>스왑</span>
					</div>						
				</div>
				<div className='col-2'>
					<div className='d-flex flex-column'>
						<Button
							icon='Security'
							isLight
							hoverShadow="lg"							
							color={isDapp ? 'danger': undefined}
							tag='a'
							to='/'
							size='lg'
							onClick={() => setFooterButton('dApp')}
							>
						</Button>
						<span className='ms-1'>dApp</span>
					</div>						
				</div>				
				<div className='col-2'>
					<div className='d-flex flex-column'>						
						<Button
							icon='People'
							isLight
							hoverShadow="lg"						
							color={isPeople ? 'success': undefined}
							// color={'success'}
							tag='a'
							to='/'
							size='lg'
							onClick={() => setFooterButton('people')}
							>
						</Button>
						<span className='ms-2'>친구</span>
					</div>							
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;
