export class Product {
  constructor(
    public id: number,
    public name: string = '',
    public description: string = '',
    public quantity: number = 0,
  ) {}
}

export const products: Product[] = [
  new Product(
    10,
    'Strawberries',
    '16oz package of fresh organic strawberries',
    1,
  ),
  new Product(20, 'Sliced bread', 'Loaf of fresh sliced wheat bread', 1),
  new Product(30, 'Apples', 'Bag of 7 fresh McIntosh apples', 1),
];
