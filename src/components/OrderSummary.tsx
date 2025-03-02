import { StripeCheckoutLineItem } from '@stripe/stripe-js';
import CheckoutItem from './CheckoutItem';

type OrderSummaryProps = {
  lineItems: StripeCheckoutLineItem[];
  total: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ lineItems, total }) => {
  return (
    <div className="flex flex-col text-center gap-5 bg-gray-50 border border-gray-300 px-20 py-10">
      <div className="text-lg">Your Order</div>
      {lineItems.map(({ name, quantity, amountSubtotal }) => (
        <CheckoutItem
          key={name}
          name={name}
          quantity={quantity}
          amountSubtotal={amountSubtotal}
        />
      ))}
      <div>
        <div>Total</div>
        <div className="font-bold">${total}.00</div>
      </div>
    </div>
  );
};

export default OrderSummary;
