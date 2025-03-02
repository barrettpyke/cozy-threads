import ProductGrid from '@/components/ProductGrid';
import { getAllProducts } from '@/db';

export default function Home() {
  const allProducts = getAllProducts();

  return <ProductGrid products={allProducts} />;
}
