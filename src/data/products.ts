export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: '베이직 티셔츠',
    price: 19900,
    image: '/images/tshirt.jpg',
    description: '편안한 착용감의 베이직 티셔츠입니다.',
  },
  {
    id: '2',
    name: '슬림 청바지',
    price: 39900,
    image: '/images/jeans.jpg',
    description: '슬림핏의 데일리 청바지.',
  },
  {
    id: '3',
    name: '러닝화',
    price: 59900,
    image: '/images/shoes.jpg',
    description: '가볍고 편안한 러닝화.',
  },
]; 