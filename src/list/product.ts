export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'item A',
    price: 1111,
    description: '',
  },
  {
    id: 2,
    name: 'item B',
    price: 2222,
    description: 'this is item B',
  },
  {
    id: 3,
    name: 'item C',
    price: 3333,
    description: '',
  },
];
