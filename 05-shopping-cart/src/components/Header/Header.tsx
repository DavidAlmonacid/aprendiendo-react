import { Filters } from '@/components';

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters />
    </header>
  );
};

export default Header;
