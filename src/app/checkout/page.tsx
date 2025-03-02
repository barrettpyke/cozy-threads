import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../../components/CheckoutPage'), {
  ssr: false,
});

export default function Page() {
  <div>
    <DynamicComponent />
  </div>;
}
