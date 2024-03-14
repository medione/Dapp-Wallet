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
		image: Pollchain,
		name: 'POLL Pollchain',
		type: 'Ethereum',
		price: 3.40,
		count: 299.37,
		date: dayjs().add(-1, 'day'),
	},
	{
		id: 2,
		image: MileVerse,
		name: 'MVC MileVerse',
		type: 'Ethereum',
		price: 5.28,
		count: 758.23,
		date: dayjs(),
	},
	{
		id: 3,
		image: Dvision,
		name: 'DVI Dvision Network',
		type: 'Ethereum',
		price: 43.29,
		count: 84.57,
		date: dayjs().add(-2, 'day'),
	},
	{
		id: 4,
		image: Klay,		
		name: 'Klay',
		type: '',
		price: 43.77,
		count: -122.03,
		date: dayjs().add(-3, 'day'),
	},
	{
		id: 5,
		image: Jasmy,		
		name: 'Zora Jasmy',
		type: 'Ethereum',
		price: 42970,
		count: 0,
		date: dayjs().add(-1, 'day'),
	},	
];
export default data;
