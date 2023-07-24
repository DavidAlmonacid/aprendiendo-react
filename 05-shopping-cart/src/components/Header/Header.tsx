import { Filters } from '@/components';
import { Filter } from '@/types';

export type HeaderProps = {
  changeFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

const Header: React.FC<HeaderProps> = ({ changeFilters }) => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};

export default Header;
