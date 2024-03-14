import dayjs from 'dayjs';
import MileVerse from '../image/mileVerse.png'
import Pollchain from '../image/pollchain.png'
import Dvision from '../image/dvision.png'
import Jasmy from '../image/jasmy.png'
import Klay from '../image/Klay.png'

const data: {
	id: number;
	image: string;
	name: string;
	type: string;
	price: number;
	count: number;
	date: dayjs.Dayjs;
}[] = [
	{
		id: 1,
		image: Jasmy,		
		name: 'Zora Jasmy',
		type: 'Ethereum',
		price: 318,
		count: 0,
		date: dayjs().add(-1, 'day'),
	},
	{
		id: 2,
		image: Dvision,
		name: 'DVI Dvision Network',
		type: 'Ethereum',
		price: 32.18,
		count: 73.46,
		date: dayjs().add(-2, 'day'),
	},
	{
		id: 3,
		image: Klay,		
		name: 'Klay',
		type: '',
		price: 32.66,
		count: -233.14,
		date: dayjs().add(-3, 'day'),
	},
	{
		id: 4,
		image: MileVerse,
		name: 'MVC MileVerse',
		type: 'Ethereum',
		price: 4.14,
		count: 647.12,
		date: dayjs(),
	},
	{
		id: 5,
		image: Pollchain,
		name: 'POLL Pollchain',
		type: 'Ethereum',
		price: 2.29,
		count: 188.26,
		date: dayjs().add(-1, 'day'),
	},	
];
export default data;
