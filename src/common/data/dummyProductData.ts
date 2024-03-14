import BeveledCone from '../../assets/img/abstract/beveled-cone.png';
import CloudBall from '../../assets/img/abstract/cloud-ball.png';
import Quadrilateral from '../../assets/img/abstract/quadrilateral.png';
import HardSharpDonut from '../../assets/img/abstract/hald-sharp-donut.png';
import BendyRectangle from '../../assets/img/abstract/bendy-rectangle.png';
import Infinity from '../../assets/img/abstract/infinity.png';
import Octahedron from '../../assets/img/abstract/octahedron.png';
import Triangle from '../../assets/img/abstract/triangle.png';
import SquiglyGlobe from '../../assets/img/abstract/squigly-globe.png';
import Dodecagon from '../../assets/img/abstract/dodecagon.png';
import BeveledCube from '../../assets/img/abstract/beveled-cube.png';
import Cylinder from '../../assets/img/abstract/cylinder.png';

const data: {
	id: number;
	image: string;
	name: string;
	category: string;
	series: { data: number[] }[];
	color: string;
	stock: number;
	price: number;
	store: string;
	file: string;
}[] = [
	{
		id: 1,
		image: BeveledCone,
		name: '강현우',
		category: '3D 형태',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: String(import.meta.env.VITE_SUCCESS_COLOR),
		stock: 380,
		price: 27
		,
		store: 'Company A',
		file: 'Figma',
	},
	{
		id: 2,
		image: CloudBall,
		name: '서지원',
		category: '3D 형태',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: String(import.meta.env.VITE_SUCCESS_COLOR),
		stock: 1245,
		price: 12,
		store: 'Company A',
		file: 'Figma',
	},
	{
		id: 3,
		image: Quadrilateral,
		name: '임성민',
		category: '3D 형태',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: String(import.meta.env.VITE_WARNING_COLOR),
		stock: 27,
		price: 12.8,
		store: 'Company D',
		file: 'XD',
	},
	{
		id: 4,
		image: HardSharpDonut,
		name: '황지연',
		category: '3D 형태',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: String(import.meta.env.VITE_DANGER_COLOR),
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Sketch',
	},
	{
		id: 5,
		image: BendyRectangle,
		name: '윤우진',
		category: '3D 형태',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: String(import.meta.env.VITE_DANGER_COLOR),
		stock: 219,
		price: 16,
		store: 'Company A',
		file: 'Figma',
	},
	{
		id: 6,
		image: Infinity,
		name: '김태영',
		category: '3D 형태',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: String(import.meta.env.VITE_SUCCESS_COLOR),
		stock: 219,
		price: 16,
		store: 'Company C',
		file: 'Figma',
	},
	{
		id: 7,
		image: Octahedron,
		name: '이민준 ',
		category: '3D 형태',
		series: [
			{
				data: [21, 34, 23, 12, 67],
			},
		],
		color: String(import.meta.env.VITE_SUCCESS_COLOR),
		stock: 498,
		price: 18,
		store: 'Company B',
		file: 'Figma',
	},
];
export default data;
