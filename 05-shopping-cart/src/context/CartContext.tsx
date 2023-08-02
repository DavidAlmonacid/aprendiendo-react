import type { CartProduct, Product } from '@/types';
import { createContext, useState } from 'react';

type CartContextType = {
  cartProducts: CartProduct[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: Product) => {
    const productInCartIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInCartIndex === -1) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      const newCartProducts = structuredClone(cartProducts);
      newCartProducts[productInCartIndex].quantity += 1;
      setCartProducts(newCartProducts);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
