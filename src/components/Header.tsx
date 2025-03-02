import Link from 'next/link';
import { ShoppingBagIcon } from './icons';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link className="mx-auto" href="/">
        <h1 className="text-xl">Cozy Threads</h1>
      </Link>
      <Link href="/checkout">
        <ShoppingBagIcon className="mr-9" />
      </Link>
    </div>
  );
};

export default Header;
