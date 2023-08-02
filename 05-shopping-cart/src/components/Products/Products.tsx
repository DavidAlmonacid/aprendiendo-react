import { AddToCartIcon } from '@/components';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import './Products.css';

export type ProductsProps = {
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <section className='products'>
      {products.map((product: Product) => (
        <article key={product.id} className='product'>
          <header>
            <h3 className='product__title' title={product.title}>
              {product.title}
            </h3>
          </header>

          <picture className='product__image-wrapper'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='product__image'
            />
          </picture>

          <div className='product__price'>
            <span>${product.price}</span>
            <button onClick={() => addToCart(product)}>
              <AddToCartIcon />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
