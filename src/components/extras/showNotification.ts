import { Store } from 'react-notifications-component';

const showNotification = (
	title: string | JSX.Element,
	message: string | JSX.Element,
	type = 'default',
) => {
	Store.addNotification({
		title,
		message,
		// @ts-ignore
		type,
		insert: 'top',
		container: 'bottom-right',
		animationIn: ['animate__animated', 'animate__fadeIn'],
		animationOut: ['animate__animated', 'animate__fadeOut'],
		dismiss: {
			// duration: 5000,
			duration: 1000,			
			pauseOnHover: true,
			onScreen: true,
			showIcon: true,
			waitForAnimation: false,
		},
	});
};

export default showNotification;
