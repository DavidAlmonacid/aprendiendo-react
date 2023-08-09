import { useEffect, useState } from 'react';
import { getProducts } from './api/products.ts';
import { Debugger, Header, Products } from './components';
import { IS_DEVELOPMENT } from './config.ts';
import { CartProvider } from './context/CartContext.tsx';
import { useFilters } from './hooks/useFilters.ts';
import { Product } from './types';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Debugger />}
    </CartProvider>
  );
};

export default App;
