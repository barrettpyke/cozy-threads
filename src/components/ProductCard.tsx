import { Product } from '@/types';
import Link from 'next/link';
import ProductImage from './ProductImage';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="hover:shadow-lg p-5">
        <ProductImage id={id.toString()} name={name} className="max-w-sm max-h-sm mb-4" />
        <div>{name}</div>
        <div>${price}.00</div>
      </div>
    </Link>
  );
};

export default ProductCard;
