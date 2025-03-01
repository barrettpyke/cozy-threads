import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="hover:shadow-lg p-5">
        <Image
          src={`/products/${id}.avif`}
          alt={`Picture of product named ${name}`}
          width={1600}
          height={2000}
          className="max-w-sm max-h-sm mb-4"
        />
        <div>{name}</div>
        <div>${price}.00</div>
      </div>
    </Link>
  );
};

export default ProductCard;
