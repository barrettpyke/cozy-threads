import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types';

const PRODUCTS: Product[] = [
  { id: 1000, name: 'Comfort Red', description: '', price: 40 },
  { id: 1001, name: 'Cropped Black', description: '', price: 35 },
  { id: 1002, name: 'Floral Blue', description: '', price: 40 },
  { id: 1003, name: 'Carolina Fairway', description: '', price: 40 },
  { id: 1004, name: 'Southern Cali', description: '', price: 25 },
  { id: 1005, name: 'Sequoia', description: '', price: 40 },
  { id: 1006, name: 'Forest', description: '', price: 45 },
  { id: 1007, name: 'Comfort Green', description: '', price: 50 },
  { id: 1008, name: 'Bar Avernus', description: '', price: 50 },
];

export default function Home() {
  return (
    <div>
      <Header />
      <ProductGrid products={PRODUCTS} />
    </div>
  );
}
