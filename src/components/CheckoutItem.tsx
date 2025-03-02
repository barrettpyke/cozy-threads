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
      <div>${amountSubtotal}.00</div>
    </div>
  );
};

export default CheckoutItem;
