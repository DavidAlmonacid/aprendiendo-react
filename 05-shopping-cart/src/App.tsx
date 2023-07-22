import { getProducts } from '@/api/products';
import { Header, Products } from '@/components';
import { useEffect, useState } from 'react';
import { Filter, Product } from './types';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filter>({
    category: 'all',
    minPrice: 0
  });

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filterProducts = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    );
  };

  return (
    <>
      {/* <Header filters={filters} setFilters={setFilters} /> */}
      <Header />
      <Products products={filterProducts(products)} />
    </>
  );
};

export default App;
