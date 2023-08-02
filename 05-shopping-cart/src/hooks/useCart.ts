import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';

export const useCart = () => {
  const context = useContext(CartContext);

  if (JSON.stringify(context) === '{}') {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
