'use client';

import { addToCart } from '@/helpers/cart';
import QuantityInput from '@/components/QuantityInput';
import { getProductById } from '@/db';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import ProductImage from '@/components/ProductImage';
import Button from '@/components/Button';

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const productResponse = getProductById(Number(id));

  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = Number(e.target.value);
    setQuantity(newValue);
  };

  if (productResponse === 'Not found') {
    return <div>There was an error loading this page. Please refresh and try again!</div>;
  }

  const { name, description, price } = productResponse;

  const onAddToCartClick = () => {
    setIsLoading(true);
    const product = { ...productResponse, quantity };

    addToCart(product);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col justify-between mx-20 xl:mx-60 gap-10 md:flex-row">
      <ProductImage id={id} name={name} className="md:max-w-xl md:max-h-md mb-4" />
      <div className="flex flex-col my-10 md:ml-15">
        <h1 className="text-xl">{name}</h1>
        <div>${price}.00</div>
        <div className="max-w-3/4 mt-3">{description}</div>
        <QuantityInput value={quantity} onChange={onQuantityChange} />
        <Button
          label="Add to Cart"
          onClick={onAddToCartClick}
          isLoading={isLoading}
          className="mt-10"
        />
      </div>
    </div>
  );
}
