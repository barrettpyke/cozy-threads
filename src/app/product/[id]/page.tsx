import { getProductById } from '@/db';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = getProductById(Number(id));

  if (product === 'Not found') {
    return <div>There was an error loading this page. Please refresh and try again!</div>;
  }

  const { name, description, price } = product;

  return (
    <div className="flex justify-between mx-20">
      <Image
        src={`/products/${id}.avif`}
        alt={`Picture of product named ${name}`}
        width={1600}
        height={2000}
        className="max-w-xl max-h-md mb-4"
      />
      <div className="flex flex-col gap-5 m-5">
        <h1 className="text-xl">{name}</h1>
        <div>${price}.00</div>
        <div className="max-w-1/2">{description}</div>
      </div>
    </div>
  );
}
