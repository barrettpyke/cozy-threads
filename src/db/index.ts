import { Product } from '@/types';

const PRODUCTS: Product[] = [
  {
    id: 1000,
    name: 'Comfort Red',
    description:
      'This vibrant red hoodie is designed for ultimate relaxation and style. Its soft, cozy fabric makes it perfect for lounging or casual outings.',
    price: 40,
  },
  {
    id: 1001,
    name: 'Cropped Black',
    description:
      'A chic, cropped black hoodie that pairs well with any outfit for a modern, laid-back look. Its minimalistic design adds versatility to your wardrobe.',
    price: 35,
  },
  {
    id: 1002,
    name: 'Floral Blue',
    description:
      'A playful, floral-patterned hoodie in calming blue hues, ideal for adding a touch of nature to your casual look. Its soft fabric ensures comfort throughout the day.',
    price: 40,
  },
  {
    id: 1003,
    name: 'Carolina Fairway',
    description:
      'Inspired by the serene landscapes of the Carolinas, this hoodie blends comfort with a timeless design. Perfect for a day on the fairway or casual wear.',
    price: 40,
  },
  {
    id: 1004,
    name: 'Southern Cali',
    description:
      'A laid-back hoodie inspired by the warm vibes of Southern California, with a relaxed fit for all-day comfort. Perfect for beach days or sunny afternoons.',
    price: 25,
  },
  {
    id: 1005,
    name: 'Sequoia',
    description:
      'A nature-inspired hoodie, reminiscent of the towering Sequoia trees, offering both comfort and style. Its rich, earthy tones bring the outdoors to your wardrobe.',
    price: 40,
  },
  {
    id: 1006,
    name: 'Forest',
    description:
      'A deep green hoodie that channels the tranquility of the forest. Soft and cozy, it’s perfect for adding a touch of nature to your everyday look.',
    price: 45,
  },
  {
    id: 1007,
    name: 'Comfort Green',
    description:
      'This hoodie combines the freshness of green with exceptional comfort for a laid-back, stylish feel. Ideal for both casual and cozy days at home or out with friends.',
    price: 50,
  },
  {
    id: 1008,
    name: 'Bar Avernus',
    description:
      'Bold and edgy, the Bar Avernus hoodie features a sleek design with a dark, mysterious aesthetic. It’s perfect for those who like to make a statement with their style.',
    price: 50,
  },
];

export const getProductById = (id: number): Product | 'Not found' => {
  return PRODUCTS.find((product) => product.id === id) || 'Not found';
};

export const getAllProducts = (): Product[] => {
  return PRODUCTS;
};
