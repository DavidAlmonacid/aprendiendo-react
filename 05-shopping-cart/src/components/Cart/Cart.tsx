import { CartIcon, ClearCartIcon } from '@/components';
import { useCart } from '@/hooks/useCart';
import { useId } from 'react';
import './Cart.css';

type CartProps = {};

const Cart: React.FC<CartProps> = ({}) => {
  const { cartProducts, addToCart, clearCart } = useCart();
  const cartCheckboxId = useId();

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Qty: {product.quantity}</small>
                <button onClick={() => addToCart(product)}>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
