import { ChangeEventHandler } from 'react';

type QuantityInputProps = {
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange }) => {
  return (
    <>
      <label className="block mt-4 mb-2">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        aria-describedby="An input for the quantity of an item"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-18 p-2.5"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default QuantityInput;
