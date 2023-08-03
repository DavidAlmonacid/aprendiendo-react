import { AddToCartIcon, RemoveFromCartIcon } from '@/components';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import './Products.css';

export type ProductsProps = {
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { cartProducts, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cartProducts.some((cartProduct) => cartProduct.id === product.id);
  };

  return (
    <section className='products'>
      {products.map((product) => {
        const isProductInCart = checkProductInCart(product);

        return (
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
              <button
                className={`product__button ${
                  isProductInCart ? 'product__button--remove' : ''
                }`}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product);
                }}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
