import { Cart, Filters } from '@/components';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Cart />
      <Filters />
    </header>
  );
};

export default Header;
