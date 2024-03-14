import dayjs from 'dayjs';
import Opensea from '../image/opensea.svg'
import LooksRare from '../image/looksrare.jpg'
import Rarible from '../image/rarible.png'

const data: {
	id: number;
	image: string;
	name: string;
	statement: string;
}[] = [
	{
		id: 1,
		image: Opensea,
		name: 'Opensea',
		statement: 'NFT 거래를 위한 최대 규모의 P2P 마켓플레이스입니다. 다양한 NFT를 구매, 판매, 제작할 수 있습니다. 280만 명의 활성 사용자와 8천만 개 이상의 NFT를 보유하고 있습니다. 이더리움, 폴리곤, Klaytn 등 여러 블록체인을 지원합니다.',
	},
	{
		id: 2,
		image: LooksRare,
		name: 'LooksRare',
		statement: 'NFT 거래를 위한 혁신적인 P2P 마켓플레이스입니다. 거래 수수료 할인과 스테이킹 보상을 제공하여 사용자에게 유리합니다. LOOKS 토큰을 활용하여 거버넌스 참여 및 수익 창출이 가능합니다. 10만 명 이상의 활성 사용자와 80만 개 이상의 NFT를 보유하고 있습니다. 오픈씨와 경쟁하는 주요 NFT 마켓플레이스입니다.',
	},
	{
		id: 3,
		image: Rarible,		
		name: 'Rarible',
		statement: 'NFT 거래를 위한 유럽 최대 규모의 P2P 마켓플레이스입니다. 다양한 NFT를 구매, 판매, 제작할 수 있습니다. 150만 명 이상의 활성 사용자와 250만 개 이상의 NFT를 보유하고 있습니다. 이더리움, 폴리곤, Tezos, Flow 등 여러 블록체인을 지원합니다. RARI 토큰을 활용하여 거버넌스 참여 및 수익 창출이 가능합니다.',
	},
];
export default data;
