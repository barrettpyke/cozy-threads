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
    <div className="flex justify-between mx-20 xl:mx-60 gap-10">
      <Image
        src={`/products/${id}.avif`}
        alt={`Picture of product named ${name}`}
        width={1600}
        height={2000}
        className="max-w-xl max-h-md mb-4"
      />
      <div className="flex flex-col my-10 ml-15">
        <h1 className="text-xl">{name}</h1>
        <div>${price}.00</div>
        <div className="max-w-3/4 mt-3">{description}</div>
        <button className="w-40 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-bold py-3 px-4 rounded-none mt-10">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
