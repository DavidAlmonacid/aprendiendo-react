import { useCartReducer } from '@/hooks/useCartReducer';
import { CartProduct, Product } from '@/types';
import { createContext } from 'react';

type CartContextType = {
  cartProducts: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cartProducts: state,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
