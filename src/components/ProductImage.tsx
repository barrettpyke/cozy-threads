import Image from 'next/image';

const ProductImage: React.FC<{ id: string; name: string; className?: string }> = ({
  id,
  name,
  className,
}) => {
  return (
    <Image
      src={`/products/${id}.avif`}
      alt={`Picture of product named ${name}`}
      width={1600}
      height={2000}
      className={className}
    />
  );
};

export default ProductImage;
