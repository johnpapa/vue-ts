export class Product {
  constructor(
    public id: number,
    public name: string = '',
    public description: string = '',
    public quantity: number = 0,
  ) {}
}

export const products: Product[] = [
  {
    id: 10,
    name: 'Strawberries',
    description: '16oz package of fresh organic strawberries',
    quantity: 1,
  },
  {
    id: 20,
    name: 'Sliced bread',
    description: 'Loaf of fresh sliced wheat bread',
    quantity: 1,
  },
  {
    id: 30,
    name: 'Apples',
    description: 'Bag of 7 fresh McIntosh apples',
    quantity: 1,
  },
];
