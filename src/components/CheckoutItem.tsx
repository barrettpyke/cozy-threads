import { formatCentsToDollars } from '@/helpers/currency';

type CheckoutItemProps = {
  name: string;
  quantity: number;
  amountSubtotal: number;
};

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  name,
  quantity,
  amountSubtotal,
}) => {
  return (
    <div>
      <div>
        {name} x {quantity}
      </div>
      <div>{formatCentsToDollars(amountSubtotal)}</div>
    </div>
  );
};

export default CheckoutItem;
