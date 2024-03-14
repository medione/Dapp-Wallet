import dayjs from 'dayjs';
import Event1 from '../image/eventFir.jpg'
// import Event2 from '../image/event2.png'
// import Event3 from '../image/event3.png'
import Eventx from '../image/eventx.webp'

const data: {
	id: number;
	image: string;
	name: string;
	type1: string;
	type2: string;	
}[] = [
	{
		id: 1,
		image: Event1,
		name: 'GemHUB 이벤트',
		type1: '#$GHUB #Community',
		type2: '2024.06.11',		
	},
	{
		id: 2,
		image: Eventx,
		name: '스왑 수수료 무료 이벤트',
		type1: '수수료무료 #0%',
		type2: '#카니아포인트',		
	},
];
export default data;
