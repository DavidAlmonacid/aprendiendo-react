import { Cart, Filters } from "@/components";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "Canvas",
        zIndex: 10
      }}
    >
      <h1>Shopping Cart</h1>
      <Cart />
      <Filters />
    </header>
  );
};

export default Header;
