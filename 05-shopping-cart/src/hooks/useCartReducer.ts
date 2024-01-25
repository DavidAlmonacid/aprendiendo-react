import {
  CartActiontype,
  cartInitialState,
  cartReducer,
} from "@/reducers/cart.ts";
import { Product } from "@/types";
import { useReducer } from "react";

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) => {
    dispatch({ type: CartActiontype.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: CartActiontype.REMOVE_FROM_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CartActiontype.CLEAR_CART });
  };

  return { state, addToCart, removeFromCart, clearCart };
};
