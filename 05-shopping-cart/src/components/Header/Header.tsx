import { Cart, Filters } from '@/components';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Cart />
      <Filters />
    </header>
  );
};

export default Header;
