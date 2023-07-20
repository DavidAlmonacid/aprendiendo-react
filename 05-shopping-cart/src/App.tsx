import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './api/products';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>My shopping cart</h1>

      {products &&
        products.map((product: Product) => (
          <article key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
          </article>
        ))}
    </>
  );
}

export default App;
