import { ShoppingBagIcon } from './icons';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-xl mx-auto">Cozy Threads</h1>
      <ShoppingBagIcon className="mr-9" />
    </div>
  );
};

export default Header;
