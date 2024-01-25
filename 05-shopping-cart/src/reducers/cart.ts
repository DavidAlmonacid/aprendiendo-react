import { CartProduct, Product } from "@/types";

interface Action {
  type: string;
  payload?: Product;
}

export enum CartActiontype {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART"
}

export const cartInitialState = JSON.parse(
  window.localStorage.getItem("cart") || "[]"
);

export const updateLocalStorage = (state: CartProduct[]) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

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
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [...state, { ...action.payload!, quantity: 1 }];

      updateLocalStorage(newState);
      return newState;
    }

    case CartActiontype.REMOVE_FROM_CART: {
      const { id } = action.payload!;
      const newState = state.filter((product) => product.id !== id);

      updateLocalStorage(newState);
      return newState;
    }

    case CartActiontype.CLEAR_CART: {
      const newState: CartProduct[] = [];
      updateLocalStorage(newState);
      return newState;
    }
  }

  return state;
};
