import { Root } from '../types';

export const getProducts = async () => {
  const response = await fetch('/products.json');
  const data: Root = await response.json();
  return data.products;
};
