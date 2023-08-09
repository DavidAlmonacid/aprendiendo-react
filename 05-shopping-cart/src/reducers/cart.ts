import { CartProduct, Product } from '@/types';

interface Action {
  type: string;
  payload?: Product;
}

export enum CartActiontype {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export const cartInitialState: CartProduct[] = [];

export const cartReducer = (state: CartProduct[], action: Action) => {
  switch (action.type) {
    case CartActiontype.ADD_TO_CART: {
      const { id } = action.payload!;
      const productInCartIndex = state.findIndex(
        (product) => product.id === id
      );

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [...state, { ...action.payload!, quantity: 1 }];
    }

    case CartActiontype.REMOVE_FROM_CART: {
      const { id } = action.payload!;
      return state.filter((product) => product.id !== id);
    }

    case CartActiontype.CLEAR_CART:
      return cartInitialState;
  }

  return state;
};
