'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../../components/CheckoutPage'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center mt-30">
      <LoadingSpinner width={5} height={5} />
    </div>
  ),
});

export default function Page() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}
