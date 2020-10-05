export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
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

// export const products: Product[] = [
//   new Product(
//     10,
//     'Strawberries',
//     '16oz package of fresh organic strawberries',
//     1,
//   ),
//   new Product(20, 'Sliced bread', 'Loaf of fresh sliced wheat bread', 1),
//   new Product(30, 'Apples', 'Bag of 7 fresh McIntosh apples', 1),
// ];
